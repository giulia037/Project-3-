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
    Dog {
      name
      age
      breed
    }
  }
`;

export const QUERY_DOGS = gql`
query Dogs {
  dogs {
    _id
    age
    breed
    image_url
    name
  }
}
`;

export const QUERY_SINGLE_DOG = gql`
query Dog($id: ID!) {
  dog(_id: $id) {
    _id
    age
    breed
    image_url
    name
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
