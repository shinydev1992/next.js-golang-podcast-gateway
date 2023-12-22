package main

import (
	"backend/config"
	"backend/controllers"
	"backend/middleware"
	"net/http"

	"github.com/gin-gonic/gin"
)

// Get the environment variables and define middlewares
var (
	env                 *config.Env     = config.NewEnv()                  // environment variables
	corsMiddleware      gin.HandlerFunc = middleware.NewCorsMiddleware()   // cors middleware
	rateLimitMiddleware gin.HandlerFunc = middleware.RateLimitMiddleware() // ratelimit middleware
)

func main() {
	// Define a router for endpoints
	router := gin.Default()
	router.Use(corsMiddleware)
	router.Use(rateLimitMiddleware)

	// Routes for podcasts endpoints
	router.GET("/heartbeat", func(c *gin.Context) { // Heartbeat endpoint
		c.JSON(http.StatusOK, gin.H{
			"message": "OK",
		})
	})
	router.GET("/podcasts", controllers.GetPodcasts) // Get podcasts from mockup

	// Run the server
	router.Run(env.ServerAddress)
}
