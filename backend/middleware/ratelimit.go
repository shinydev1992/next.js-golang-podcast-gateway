package middleware

import (
	"backend/config"
	"backend/domain"
	"context"
	"fmt"
	"net/http"
	"time"

	ratelimit "github.com/JGLTechnologies/gin-rate-limit"
	"github.com/gin-gonic/gin"
	"github.com/redis/go-redis/v9"
)

func RateLimitMiddleware() gin.HandlerFunc {
	// Get environment variables
	env := config.NewEnv()

	// Create a config to handle rate limit based on redis
	store := ratelimit.RedisStore(&ratelimit.RedisOptions{
		RedisClient: redis.NewClient(&redis.Options{
			Network:  env.RedisNet, // redis network
			Addr:     env.RedisUrl, // redis address
			Password: env.RedisPwd, // redis password
			DB:       env.RedisDb,  // redis db
			OnConnect: func(ctx context.Context, conn *redis.Conn) error {
				fmt.Printf("new conn=%v\n", conn)
				return nil
			},
		}),
		Rate:  5 * time.Second,
		Limit: 2,
	})

	// Return the middleware function for handling rate limit
	return ratelimit.RateLimiter(store, &ratelimit.Options{
		ErrorHandler: func(c *gin.Context, info ratelimit.Info) {
			c.Header("X-Rate-Limit-Limit", fmt.Sprintf("%d", info.Limit))
			c.Header("X-Rate-Limit-Reset", fmt.Sprintf("%d", info.ResetTime.Unix()))
			c.JSON(http.StatusTooManyRequests, domain.ErrTooManyRequests)
		},
	})
}
