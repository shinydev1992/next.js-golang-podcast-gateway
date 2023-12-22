package domain

import "backend/graph/model"

type Podcast struct {
	Id              string `json:"id"`
	Title           string `json:"title"`
	Images          Image  `json:"images"`
	IsExclusive     bool   `json:"isExclusive"`
	PublisherName   string `json:"publisherName"`
	PublisherId     string `json:"publisherId"`
	MediaType       string `json:"mediaType"`
	Description     string `json:"description"`
	CategoryId      string `json:"categoryId"`
	CategoryName    string `json:"categoryName"`
	HasFreeEpisodes bool   `json:"hasFreeEpisodes"`
	PlaySequence    string `json:"playSequence"`
}

type Image struct {
	Default   string `json:"default"`
	Featured  string `json:"featured"`
	Thumbnail string `json:"thumbnail"`
	Wide      string `json:"wide"`
}

// Convert podcast struct to GraphQL model
func (p *Podcast) ConvertToGqlPodcast() *model.Podcast {
	return &model.Podcast{
		ID:    p.Id,
		Title: p.Title,
		Images: &model.Image{
			Default:   p.Images.Default,
			Featured:  p.Images.Featured,
			Thumbnail: p.Images.Thumbnail,
			Wide:      p.Images.Wide,
		},
		IsExclusive:     p.IsExclusive,
		PublisherName:   p.PublisherName,
		PublisherID:     p.PublisherId,
		MediaType:       p.MediaType,
		Description:     p.Description,
		CategoryID:      p.CategoryId,
		CategoryName:    p.CategoryName,
		HasFreeEpisodes: p.HasFreeEpisodes,
		PlaySequence:    p.PlaySequence,
	}
}
