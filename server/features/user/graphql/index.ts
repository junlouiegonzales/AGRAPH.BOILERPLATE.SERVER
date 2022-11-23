import { gql } from 'apollo-server-core';

export default gql`
  scalar Upload

  type User {
    firstName: String
    lastName: String
  }

  type Mutation {
    addUser(firstName: String, lastName: String): User
  }

  type Query {
    getUserByParam(userId: String): User
  }

  type Subscription {
    onUserCreated(userId: String!): User
  }
`;
