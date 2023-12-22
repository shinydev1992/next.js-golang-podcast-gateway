type Image = {
  default: string;
  featured: string;
  thumbnail: string;
  wide: string;
};

export type Podcast = {
  id: string;
  title: string;
  images: Image;
  isExclusive: string;
  publisherName: string;
  publisherId: string;
  mediaType: string;
  description: string;
  categoryId: string;
  categoryName: string;
  hasFreeEpisodes: string;
  playSequence: string;
};