import { gql } from "@apollo/client";

export const GET_COUNTRIES = gql`
  query Countries {
    countries {
      id
      name
      code
    }
  }
`;

export const GET_STATES = gql`
  query States {
    states {
      id
      name
      stateCode
    }
  }
`;
