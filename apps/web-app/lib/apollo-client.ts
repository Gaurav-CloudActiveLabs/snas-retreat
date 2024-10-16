"use client"
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:3001/api/graphql', // Update this with the correct URL of your Keystone GraphQL endpoint
  cache: new InMemoryCache(),
});

export default client;
