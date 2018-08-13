// @flow

import React from 'react';
import { ApolloProvider } from 'react-apollo';

import { client } from './apollo/client';

import HomeScreenContainer from './components/HomeScreenContainer';

const App = () => (
  <ApolloProvider client={client}>
    <HomeScreenContainer />
  </ApolloProvider>
);

export default App;
