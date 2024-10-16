// components/CustomApolloProvider.js
"use client"
import { ApolloProvider } from '@apollo/client';
import client from '@/lib/apollo-client';

const CustomApolloProvider = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default CustomApolloProvider;
