import { gql } from '../gql';

export const SIGNIN = gql(/* GraphQL */ `
  mutation AuthenticateUserWithPassword($email: String!, $password: String!) {
    authenticateUserWithPassword(email: $email, password: $password) {
      ... on UserAuthenticationWithPasswordSuccess {
        sessionToken
        item {
          id
          firstName
          email
        }
      }
    }
  }
`);

export const getAuthenticatedUser = gql(/* GraphQL */ `
  query User {
    authenticatedItem {
      ... on User {
        id
        firstName
        email
        createdAt
        postsCount
      }
    }
  }
`);
