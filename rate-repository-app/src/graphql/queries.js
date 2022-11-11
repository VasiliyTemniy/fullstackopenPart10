import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
query Repositories {
  repositories {
    edges {
      node {
        id
        fullName
        ratingAverage
        reviewCount
        stargazersCount
        forksCount
        description
        language
        ownerAvatarUrl
      }
    }
  }
}
`;

export const GET_REPO_DETAILS = gql`
query RepoDetails($repoId: ID!) {
  repository(id: $repoId) {
    id
    fullName
    url
  }
}
`;

export const ME_QUERY = gql`
query Me {
  me {
    id
    username
  }
}
`;
