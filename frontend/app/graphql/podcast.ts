import { gql } from "@apollo/client";

export const GET_PODCASTS = gql`
  query ($query: String!) {
    getPodcasts(query: $query) {
      id
      title
      description
      images {
        default
        featured
        thumbnail
        wide
      }
      isExclusive
      publisherName
      publisherId
      mediaType
      categoryId
      categoryName
      hasFreeEpisodes
      playSequence
    }
  }
`;
