import {Transformer} from './types';

import {PrejudicePageQuery} from '~/graphql/graphql-request';

export type Props = {
  prejudice: {
    title: string;
    number: number;
    userFrom: {
      alias: string;
      displayName: string;
      picture: string;
    };
    userTo: {
      alias: string;
      displayName: string;
      picture: string;
    };
  };
};
export const transformerPrejudicePage: Transformer<PrejudicePageQuery, Props> =
  ({getPrejudice: {prejudice}}) =>
    prejudice
      ? {
          prejudice: {
            title: prejudice.title,
            number: prejudice.number,
            userFrom: {...prejudice.posted},
            userTo: {...prejudice.received},
          },
        }
      : null;
