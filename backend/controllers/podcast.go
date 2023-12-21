package controllers

import (
	"backend/domain"
	"backend/services"
	"net/http"

	"github.com/gin-gonic/gin"
)

func GetPodcasts(c *gin.Context) {
	// Make a request to the mockup API and get response from the mockup
	podcasts, err := services.GetPodcastsFromMockup(c.Request.URL.RawQuery)
	if err != nil {
		c.JSON(http.StatusInternalServerError, domain.ErrInternalServerError)
		return
	}

	// Send the response to the frontend
	c.JSON(http.StatusOK, podcasts)
}
