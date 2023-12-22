package domain

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
	CategoryName    string `json:"CategoryName"`
	HasFreeEpisodes bool   `json:"hasFreeEpisodes"`
	PlaySequence    string `json:"playSequence"`
}

type Image struct {
	Default   string `json:"default"`
	Featured  string `json:"featured"`
	Thumbnail string `json:"thumbnail"`
	Wide      string `json:"wide"`
}
