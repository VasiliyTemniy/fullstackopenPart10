import { gql } from '@apollo/client';
import { REVIEW_INFO } from './fragments';

export const SIGN_IN = gql`
mutation SignIn($credentials: AuthenticateInput) {
  authenticate(credentials: $credentials) {
    accessToken
  }
}
`;

export const CREATE_USER = gql`
mutation CreateUser($user: CreateUserInput) {
  createUser(user: $user) {
    id
    username
  }
}
`;

export const CREATE_REVIEW = gql`
mutation CreateReview($review: CreateReviewInput) {
  createReview(review: $review) {
    ...ReviewInfo
    repositoryId
  }
}
${REVIEW_INFO}
`;

export const DELETE_REVIEW = gql`
mutation DeleteReview($deleteReviewId: ID!) {
  deleteReview(id: $deleteReviewId)
}
`;