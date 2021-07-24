import {GetServerSideProps, InferGetServerSidePropsType, NextPage} from 'next';
import React from 'react';
import {Merge} from 'type-fest';

import {graphqlSdk} from '~/graphql/graphql-request';
import {UserTemplate} from '~/template/User';

export type StaticProps = {user: {alias: string; displayName: string | null}};
export type UrlQuery = {alias: string};

export const getServerSideProps: GetServerSideProps<StaticProps, UrlQuery> =
  async ({params}) => {
    if (!params?.alias) throw new Error('Invalid parameters.');

    const result = await graphqlSdk.UserPage({alias: params.alias});
    if (!result.user) return {notFound: true};

    return {
      props: {
        user: {
          alias: result.user.alias,
          displayName: result.user.displayName || null,
        },
      },
    };
  };

export type PageProps = Merge<
  {className?: string},
  InferGetServerSidePropsType<typeof getServerSideProps>
>;
export const Page: NextPage<PageProps> = ({className, user, ...props}) => {
  return (
    <>
      <UserTemplate className={className} user={user} />
    </>
  );
};
export default Page;
