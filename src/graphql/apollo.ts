import {
  ApolloClient,
  ApolloLink,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client';
import {setContext} from '@apollo/client/link/context';
import * as jwt from 'jsonwebtoken';

import {API_ACCESS_TOKEN_KEY, GRAPHQL_API_ENDPOINT} from '~/lib/env';

export * from './codegen/apollo';

export const isTokenExpired = (token: string): boolean => {
  const exp = jwt.decode(token, {json: true})?.exp;
  if (!exp) return false;
  return exp < Date.now() / 1000;
};

export const getNewAccessToken = (): Promise<string> => {
  return fetch('/api/refresh', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
  }).then((data) => data.text());
};

export const createApolloClient = () => {
  const httpLink = createHttpLink({
    uri: GRAPHQL_API_ENDPOINT,
  });

  const authLink = setContext(async (_, {headers}) => {
    const oldToken = sessionStorage.getItem(API_ACCESS_TOKEN_KEY);
    const newToken =
      oldToken && isTokenExpired(oldToken)
        ? await getNewAccessToken()
        : oldToken;

    if (newToken) sessionStorage.setItem(API_ACCESS_TOKEN_KEY, newToken);

    return {
      headers: {
        ...headers,
        authorization: newToken ? `Bearer ${newToken}` : '',
      },
    };
  });

  const client = new ApolloClient({
    link: ApolloLink.from([authLink, httpLink]),
    cache: new InMemoryCache(),
    ssrMode: !process.browser,
    connectToDevTools: process.browser,
  });

  return client;
};
