import { gql } from 'apollo-server-core';

export default gql`
  type User {
    firstName: String
    lastName: String
  }

  type Mutation {
    addUser(firstName: String, lastName: String): User
  }
`;
