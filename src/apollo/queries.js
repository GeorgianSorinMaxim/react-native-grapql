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

export const GET_VISIBILITY_FILTER = gql`
  {
    visibilityFilter @client
  }
`;

export const updateVisbilityFilter = gql`
  mutation updateVisbilityFilter($visibilityFilter: Boolean!) {
    updateVisbilityFilter(visibilityFilter: $visibilityFilter) @client
  }
`;
