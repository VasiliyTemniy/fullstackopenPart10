import { gql } from '@apollo/client';
import { REPOSITORY_INFO, REVIEW_INFO } from './fragments';

export const GET_REPOSITORIES = gql`
query ($orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection) {
  repositories(orderBy: $orderBy, orderDirection: $orderDirection) {
    edges {
      node {
        ...RepositoryInfo
      }
    }
  }
}
${REPOSITORY_INFO}
`;

export const GET_REPO_DETAILS = gql`
query RepoDetails($repoId: ID!) {
  repository(id: $repoId) {
    url
    ...RepositoryInfo
    reviews {
      edges {
        node {
          ...ReviewInfo
        }
      }
    }
  }
}
${REPOSITORY_INFO}
${REVIEW_INFO}
`;

export const ME_QUERY = gql`
query Me {
  me {
    id
    username
  }
}
`;