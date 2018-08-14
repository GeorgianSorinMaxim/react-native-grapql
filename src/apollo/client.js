// @flow

import { ApolloClient } from 'apollo-client';
import { withClientState } from 'apollo-link-state';
import { ApolloLink } from 'apollo-link';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';

const cache = new InMemoryCache({
  dataIdFromObject: object => object.key || null
});

const defaults = {
  visibilityFilter: true
};

const stateLink = withClientState({
  cache,
  defaults,
  resolvers: {
    Mutation: {
      /* eslint-disable */
      updateVisbilityFilter: (_, { visibilityFilter }, { cache }) => {
        /* eslint-enabled */
        cache.writeData({ data: { visibilityFilter: visibilityFilter } });
        return cache;
      }
    }
  }
});

const client = new ApolloClient({
  cache,
  link: ApolloLink.from([stateLink, new HttpLink({ uri: 'http://localhost:8080/graphql' })])
});

client.onResetStore(stateLink.writeDefaults);

export default client;
