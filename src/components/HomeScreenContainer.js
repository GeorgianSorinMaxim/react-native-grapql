// @flow

import React from 'react';
import { Query } from 'react-apollo';
import { Text, ActivityIndicator } from 'react-native';

import HomeScreen from './HomeScreen';

import { GET_DATA } from '../apollo/queries';

type Props = {
  data: Object,
  loading: boolean,
  error: any
};

export const HomeScreenContainer = ({ data, loading }: Props) => (
  <Query query={GET_DATA}>
    {({ loading, error, data }) => {
      return <HomeScreen data={data} loading={loading} error={error} />;
    }}
  </Query>
);

export default HomeScreenContainer;
