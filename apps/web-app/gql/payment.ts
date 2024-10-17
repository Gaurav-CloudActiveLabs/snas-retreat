import { gql } from "@apollo/client";

export const BOOKING_PAYMENT = gql`
  mutation BookingPayment($bookingId: String!, $userId: String!) {
    bookingPayment(bookingId: $bookingId, userId: $userId) {
      message
      payment {
        id
        requestId
        currency
        amount
      }
    }
  }
`;
