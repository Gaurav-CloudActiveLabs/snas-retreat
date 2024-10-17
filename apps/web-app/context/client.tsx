import { HttpLink } from "@apollo/client";
import {
  registerApolloClient,
  ApolloClient,
  InMemoryCache,
} from "@apollo/experimental-nextjs-app-support";
import { cookies } from 'next/headers';
import { createUploadLink } from "apollo-upload-client";

export default function getToken(): string {
    const cookieStore = cookies();
    const token = cookieStore.get('token');
    //
    return token?.value || '';
  }  

export const { getClient, query, PreloadQuery } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: createUploadLink({
      uri: `http://localhost:3001/api/graphql`,
      headers: {
        Authorization: getToken(),
      },
      credentials: 'same-origin',
    }),
  });
});