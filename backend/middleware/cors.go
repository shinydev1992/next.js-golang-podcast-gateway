package middleware

import (
	"log"
	"net/http"

	"github.com/gin-gonic/gin"
)

func NewCorsMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		// Get header values from the request
		method := c.Request.Method
		origin := c.Request.Header.Get("Origin")

		// Add header values to config cors
		if origin != "" {
			c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
			c.Header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE, UPDATE")
			c.Header("Access-Control-Allow-Headers", "Authorization, Content-Length, Content-Type, X_CSRF-Token, Token, session")
			c.Header("Access-Control-Expose-Headers", "Content-Length, Access-Control-Allow-Origin, Access-Control-Allow-Headers")
			c.Header("Access-Control-Max-Age", "172800")
			c.Header("Access-Control-Allow-Credentials", "true")
		}
		if method == "OPTIONS" {
			c.JSON(http.StatusOK, "Success")
		}
		defer func() {
			if err := recover(); err != nil {
				log.Printf("Panic info is: %v", err)
			}
		}()
		c.Next()
	}
}
