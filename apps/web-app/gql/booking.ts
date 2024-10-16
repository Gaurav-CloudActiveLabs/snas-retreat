import { gql } from "@apollo/client";

export const CREATE_BOOKING = gql`
  mutation CreateBooking($data: BookingCreateInput!) {
    createBooking(data: $data) {
      id
    }
  }
`;
