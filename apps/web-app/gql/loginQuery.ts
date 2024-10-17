import { gql } from "@apollo/client";

export const WEB_LOGIN = gql`
  mutation Mutation($email: String!) {
    registerUser(email: $email) {
      message
      result
      type
      userID
      request_id
    }
  }
`;

export const VERIFY_OTP= gql`
mutation Mutation($email: String!, $otp: String!) {
  verifyOtp(email: $email, otp: $otp) {
    message
    result
    token
    user {
      id
      name
      email
    }
  }
}
`
