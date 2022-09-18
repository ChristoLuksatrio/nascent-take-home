import { gql } from "@apollo/client";

export const ADD_SUBMISSION = gql`
  mutation addSubmission(
    $firstName: String
    $lastName: String
    $phoneNumber: String
    $address: String
    $pokemon: String
  ) {
    addSubmission(
      firstName: $firstName
      lastName: $lastName
      phoneNumber: $phoneNumber
      address: $address
      pokemon: $pokemon
    ) {
      firstName
      lastName
      phoneNumber
      address
      pokemon
    }
  }
`;
