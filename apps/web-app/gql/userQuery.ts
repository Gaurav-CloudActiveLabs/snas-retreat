import { gql } from "@apollo/client";

export const UPDATE_USER = gql`
mutation UpdateUser($where: UserWhereUniqueInput!, $data: UserUpdateInput!) {
  updateUser(where: $where, data: $data) {
    id
    name
    email
  }
}
`;
