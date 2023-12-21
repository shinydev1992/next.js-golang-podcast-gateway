package main

import (
	"backend/config"
	"backend/controllers"
	"backend/graph"
	"backend/middleware"
	"net/http"

	"github.com/99designs/gqlgen/graphql/handler"
	"github.com/99designs/gqlgen/graphql/playground"
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

	// Build GraphQL server and playground
	router.POST("/query", graphqlHandler())
	router.GET("/", playgroundHandler())

	// Run the server
	router.Run(env.ServerAddress)
}

// Define the Graphql handler
func graphqlHandler() gin.HandlerFunc {
	// NewExecutableSchema and Config are in the generated.go file
	// Resolver is in the resolver.go file
	h := handler.NewDefaultServer(graph.NewExecutableSchema(graph.Config{Resolvers: &graph.Resolver{}}))

	return func(c *gin.Context) {
		h.ServeHTTP(c.Writer, c.Request)
	}
}

// Define the Graphql playground handler
func playgroundHandler() gin.HandlerFunc {
	h := playground.Handler("GraphQL", "/query")
	return func(c *gin.Context) {
		h.ServeHTTP(c.Writer, c.Request)
	}
}
