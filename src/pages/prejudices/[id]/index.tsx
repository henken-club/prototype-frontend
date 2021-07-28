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
export type UrlQuery = {id: string};

export const getServerSideProps: GetServerSideProps<StaticProps, UrlQuery> =
  async ({params}) => {
    if (!params?.id) throw new Error('Invalid parameters.');

    const result = await graphqlSdk.PrejudicePage({id: params.id});
    if (!result.prejudice) return {notFound: true};

    return {
      props: {
        prejudice: {
          title: result.prejudice.title,
          userFrom: {...result.prejudice.userFrom},
          userTo: {...result.prejudice.userTo},
        },
      },
    };
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
