// @flow

import gql from 'graphql-tag';

export const GET_DATA = gql`
  query data {
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

export const GET_LIST_VISIBILITY = gql`
  {
    visibilityFilter @client
  }
`;

export const updateListVisibility = gql`
  mutation updateListVisibility($visibilityFilter: Boolean!) {
    updateListVisibility(visibilityFilter: $visibilityFilter) @client
  }
`;
