"use client";
import ContextProvider from "@/context/provider";
import {
  ApolloNextAppProvider,
  ApolloClient,
  InMemoryCache,
} from "@apollo/experimental-nextjs-app-support";
import { getCookie } from 'cookies-next';
import { createUploadLink } from "apollo-upload-client";

const token = getCookie('token');

// have a function to create a client for you
function makeClient() {
  const uploadLink = createUploadLink({
    // this needs to be an absolute url, as relative urls cannot be used in SSR
    uri: "http://localhost:3001/api/graphql",
    headers: {
      Authorization: token ? token : '',
    },
    // you can disable result caching here if you want to
    // (this does not work if you are rendering your page with `export const dynamic = "force-static"`)
    fetchOptions: { cache: "no-store" },
  });

  // use the `ApolloClient` from "@apollo/experimental-nextjs-app-support"
  return new ApolloClient({
    // use the `InMemoryCache` from "@apollo/experimental-nextjs-app-support"
    cache: new InMemoryCache(),
    link: uploadLink,
  });
}

// you need to create a component to wrap your app in
export function ApolloWrapper({ children }: React.PropsWithChildren) {
  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      <ContextProvider>
      {children}
      </ContextProvider>
    </ApolloNextAppProvider>
  );
}