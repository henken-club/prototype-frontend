import {GetServerSideProps, InferGetServerSidePropsType, NextPage} from 'next';
import React from 'react';
import {Merge} from 'type-fest';

import {graphqlSdk} from '~/graphql/graphql-request';
import {UserTemplate} from '~/template/User';

export type StaticProps = {
  user: {
    alias: string;
    displayName: string;
    picture: string;
    following: {alias: string; displayName: string; picture: string}[];
    followingCount: number;
    followers: {alias: string; displayName: string; picture: string}[];
    followersCount: number;
  };
};
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
          displayName: result.user.displayName,
          picture: result.user.picture,
          following: result.user.following.nodes.map(
            ({alias, displayName, picture}) => ({
              alias,
              displayName,
              picture,
            }),
          ),
          followingCount: result.user.following.totalCount,
          followers: result.user.followers.nodes.map(
            ({alias, displayName, picture}) => ({
              alias,
              displayName,
              picture,
            }),
          ),
          followersCount: result.user.followers.totalCount,
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
