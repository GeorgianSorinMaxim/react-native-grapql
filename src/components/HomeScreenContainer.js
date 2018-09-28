// @flow

import React from 'react';
import { compose, graphql } from 'react-apollo';

import HomeScreen from './HomeScreen';

import { GET_LIST_VISIBILITY, GET_DATA } from '../apollo/queries';

type Props = {
  dataQuery: object,
  appStateQuery: object
};

export const HomeScreenContainer = ({ dataQuery, appStateQuery }: Props) =>
  !dataQuery.loading && !appStateQuery.loading ? (
    <HomeScreen
      data={dataQuery.posts}
      loading={dataQuery.loading}
      error={dataQuery.error}
      visible={appStateQuery.visibilityFilter}
    />
  ) : null;

export default compose(
  graphql(GET_LIST_VISIBILITY, {
    name: 'appStateQuery'
  }),
  graphql(GET_DATA, {
    name: 'dataQuery'
  })
)(HomeScreenContainer);
