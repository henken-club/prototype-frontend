import {GraphQLClient} from 'graphql-request';

import {getSdk} from './codegen/graphql-request';

import {GRAPHQL_API_ENDPOINT} from '~/lib/env';

export * from './codegen/graphql-request';

export const graphqlSdk = getSdk(new GraphQLClient(GRAPHQL_API_ENDPOINT));
