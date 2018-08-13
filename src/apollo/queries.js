// @flow

import gql from 'graphql-tag';
import { Query } from 'react-apollo';

export const GET_DATA = gql`
  query allPosts {
    posts {
      id
      title
      votes
      author {
        id
        firstName
        lastName
      }
    }
  }
`;
