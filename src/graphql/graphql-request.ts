import {GraphQLClient} from 'graphql-request';

import {getSdk} from './codegen/graphql-request';

export * from './codegen/graphql-request';

export const graphqlSdk = getSdk(
  // eslint-disable-next-line no-process-env
  new GraphQLClient(process.env.GRAPHQL_API_ENDPOINT!),
);
