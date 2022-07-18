import { gql } from '@apollo/client';

const GET_LIST = gql`
  query  {
    list {
      _id
      picture
      age
      eyeColor
      name
      company
      email
    }
  }
`;

const GET_USER_DETAIL = gql`
  query ($id: String!) {
    getUserData (id: $id) {
      _id
      picture
      age
      name
      email
      friends {
        _id
        picture
        age
        eyeColor
        name
        company
        email
      }
    }
  }
`;

export { GET_LIST, GET_USER_DETAIL };