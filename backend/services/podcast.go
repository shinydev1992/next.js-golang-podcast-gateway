package services

import (
	"backend/domain"
	"backend/utils"
	"encoding/json"
	"io/ioutil"
	"net/http"
)

// Get podcasts from the mockup
func GetPodcastsFromMockup(queryParams string) ([]*domain.Podcast, error) {
	// Make a request to the mockup API for getting podcasts
	resp, err := http.Get(utils.MOCKUP_PODCAST_API_URL + "?" + queryParams)
	if err != nil {
		return nil, err
	}

	defer resp.Body.Close()

	// Parse the podcasts from the mockup's response
	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		return nil, err
	}

	// Get podcasts data from the body
	var podcasts []*domain.Podcast
	err = json.Unmarshal(body, &podcasts)
	if err != nil {
		return nil, err
	}

	return podcasts, nil
}
