import { gql } from '@apollo/client';
import { PAGE_INFO, REPOSITORY_INFO, REVIEW_INFO } from './fragments';

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
      ...PageInfoFragment
    }
  }
}
${REPOSITORY_INFO}
${PAGE_INFO}
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
        ...PageInfoFragment
      }
    }
  }
}
${REPOSITORY_INFO}
${REVIEW_INFO}
${PAGE_INFO}
`;

export const GET_CURRENT_USER = gql`
query Me($first: Int, $after: String, $includeReviews: Boolean = false) {
  me {
    id
    username
    reviews(first: $first, after: $after) @include(if: $includeReviews) {
      totalCount
      edges {
        node {
          repositoryId
          ...ReviewInfo
        }
        cursor
      }
      pageInfo {
        ...PageInfoFragment
      }
    }
  }
}
${REVIEW_INFO}
${PAGE_INFO}
`;