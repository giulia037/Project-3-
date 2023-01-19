import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      thoughts {
        _id
        thoughtText
        createdAt
      }
    }
  }
`;
export const QUERY_DOG = gql`
  query getDog {
    thoughts {
      _id
      name
      age
      breed
    }
  }
`;

export const QUERY_SINGLE_DOG = gql`
  query getSingleDog($DogId: ID!) {
    Dog(dogId: $dogId) {
      _id
      name
      age
      breed 
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
    }
  }
`;
