import { gql } from "@apollo/client";

export const ROOMS = gql`
 query Rooms($where: RoomWhereInput!) {
  rooms(where: $where) {
    id
    roomNumber
    isAvailable
    bookings {
      id
    }
    roomType {
      id
      name
      actualPrice
      offerPrice
      description
      reviews {
        id
        comment
        rating
      }
      images {
        image {
          url
        }
      }
      breakfastPrice {
        price
      }
      dinnerPrice {
        price
      }
      numberOfAdults
      numberOfChildren
    }
  }
}
`;
