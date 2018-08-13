// @flow

import ApolloClient from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';
// import { HttpLink } from 'apollo-link-http';

export const cache = new InMemoryCache();

// const httpLink = new HttpLink({
//   uri: 'http://localhost:8080/graphql'
// });

export const client = new ApolloClient({
  uri: 'http://localhost:8080/graphql',
  cache
});
