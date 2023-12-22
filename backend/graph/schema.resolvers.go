package graph

import (
	"backend/graph/model"
	"backend/services"
	"context"
)

// Podcast is the resolver for the podcast field.
func (r *queryResolver) GetPodcasts(ctx context.Context, query string) ([]*model.Podcast, error) {
	// Get podcasts from the mockup
	podcasts, err := services.GetPodcastsFromMockup(query)
	if err != nil {
		return nil, err
	}

	// Convert podcasts to GraphQL model
	var gqlPodcasts []*model.Podcast
	for _, podcast := range podcasts {
		gqlPodcasts = append(gqlPodcasts, podcast.ConvertToGqlPodcast())
	}

	return gqlPodcasts, nil
}

// Query returns QueryResolver implementation.
func (r *Resolver) Query() QueryResolver { return &queryResolver{r} }

type queryResolver struct{ *Resolver }
