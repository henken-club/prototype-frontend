import {GetServerSideProps, InferGetServerSidePropsType, NextPage} from 'next';
import React from 'react';
import {Merge} from 'type-fest';

import {graphqlSdk} from '~/graphql/graphql-request';
import {PrejudiceTemplate} from '~/template/Prejudice';

export type StaticProps = {
  prejudice: {
    title: string;
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
export type UrlQuery = {posted: string; received: string; number: string};

export const getServerSideProps: GetServerSideProps<StaticProps, UrlQuery> =
  async ({params}) => {
    if (
      !params ||
      !params.posted ||
      !params.received ||
      !(params.number && parseInt(params.number, 10))
    )
      throw new Error('Invalid parameters.');

    return graphqlSdk
      .PrejudicePage({
        posted: params.posted,
        received: params.received,
        number: parseInt(params.number, 10),
      })
      .then(({getPrejudice: {prejudice}}) =>
        prejudice
          ? {
              props: {
                prejudice: {
                  title: prejudice.title,
                  userFrom: {...prejudice.userFrom},
                  userTo: {...prejudice.userTo},
                },
              },
            }
          : {notFound: true},
      );
  };

export type PageProps = Merge<
  {className?: string},
  InferGetServerSidePropsType<typeof getServerSideProps>
>;
export const Page: NextPage<PageProps> = ({className, prejudice, ...props}) => {
  return (
    <>
      <PrejudiceTemplate className={className} prejudice={prejudice} />
    </>
  );
};
export default Page;
