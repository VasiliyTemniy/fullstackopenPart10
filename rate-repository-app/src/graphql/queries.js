import { gql } from '@apollo/client';
import { REPOSITORY_INFO, REVIEW_INFO } from './fragments';

export const GET_REPOSITORIES = gql`
query Repositories(
  $orderBy: AllRepositoriesOrderBy,
  $orderDirection: OrderDirection,
  $searchKeyword: String,
  $first: Int,
  $after: String
  ) {
  repositories(
    orderBy: $orderBy,
    orderDirection: $orderDirection,
    searchKeyword: $searchKeyword,
    first: $first,
    after: $after
    ) {
    totalCount
    edges {
      node {
        ...RepositoryInfo
      }
      cursor
    }
    pageInfo {
      endCursor
      startCursor
      hasNextPage
    }
  }
}
${REPOSITORY_INFO}
`;

export const GET_REPO_DETAILS = gql`
query RepoDetails($repoId: ID!, $first: Int, $after: String) {
  repository(id: $repoId) {
    url
    ...RepositoryInfo
    reviews(first: $first, after: $after) {
      totalCount
      edges {
        node {
          ...ReviewInfo
        }
        cursor
      }
      pageInfo {
        endCursor
        startCursor
        hasNextPage
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