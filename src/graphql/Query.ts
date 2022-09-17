import { gql } from "@apollo/client";
export const GET_SUBMISSIONS = gql`
  {
    getSubmissions {
      firstName
      lastName
      phoneNumber
      address
      pokemon
    }
  }
`;
