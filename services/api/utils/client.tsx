import { HttpLink } from '@apollo/client';
import {
  ApolloClient,
  InMemoryCache,
  registerApolloClient,
} from '@apollo/experimental-nextjs-app-support';
import { cookies } from 'next/headers';

import serverUrl from '../next.config.mjs';

export default function getToken(): string {
  const cookieStore = cookies();
  const token = cookieStore.get('keystonejs-session');
  //
  return token?.value || '';
}

export const { getClient, query, PreloadQuery } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: `http://localhost:4200/api/graphql`,
      headers: {
        Authorization: getToken(),
      },
    }),
    credentials: 'same-origin',
  });
});
