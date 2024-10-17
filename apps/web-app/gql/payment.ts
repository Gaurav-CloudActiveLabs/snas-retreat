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

export const UPDATE_BOOKING_PAYMENT = gql`
  mutation UpdateBookingPayment(
    $requestId: String
    $bookingId: String
    $paymentId: String
    $signature: String
  ) {
    updateBookingPayment(
      requestId: $requestId
      bookingId: $bookingId
      paymentId: $paymentId
      signature: $signature
    ) {
      message
      payment {
        id
        requestId
        response
      }
    }
  }
`;
