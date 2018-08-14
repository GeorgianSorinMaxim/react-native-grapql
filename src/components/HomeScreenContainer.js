// @flow

import React from 'react';
import { compose, graphql } from 'react-apollo';

import HomeScreen from './HomeScreen';

import { GET_VISIBILITY_FILTER, GET_DATA } from '../apollo/queries';

type Props = {
  dataQuery: object,
  visibilityQuery: object
};

export const HomeScreenContainer = ({ dataQuery, visibilityQuery }: Props) =>
  !dataQuery.loading && !visibilityQuery.loading ? (
    <HomeScreen
      data={dataQuery.posts}
      loading={dataQuery.loading}
      error={dataQuery.error}
      visible={visibilityQuery.visibilityFilter}
    />
  ) : null;

export default compose(
  graphql(GET_VISIBILITY_FILTER, {
    name: 'visibilityQuery'
  }),
  graphql(GET_DATA, {
    name: 'dataQuery'
  })
)(HomeScreenContainer);
