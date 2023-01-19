const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    username: String
    email: String
    password: String
  }

  type Dog {
    name: String
    age: Int
    breed: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    dogs: [Dog]
    dog(name: String!): Dog
    me: User 
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addDog(name: String!, age: Int!, breed: String!): Dog
  }
`;

module.exports = typeDefs;
