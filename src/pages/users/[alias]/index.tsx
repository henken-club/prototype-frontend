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
    postedPrejudices: {
      id: string;
      title: string;
      userTo: {alias: string; displayName: string; picture: string};
    }[];
    recievedPrejudices: {
      id: string;
      title: string;
      userFrom: {alias: string; displayName: string; picture: string};
    }[];
    answers: {
      id: string;
    }[];
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
          following: result.user.following.nodes.map((user) => ({
            ...user,
          })),
          followingCount: result.user.following.totalCount,
          followers: result.user.followers.nodes.map((user) => ({
            ...user,
          })),
          followersCount: result.user.followers.totalCount,
          postedPrejudices: result.user.prejudicesPosted.nodes.map(
            ({id, title, userTo, answer}) => ({
              id,
              title,
              userTo: {...userTo},
              answer: answer ? {...answer} : null,
            }),
          ),
          recievedPrejudices: result.user.preduicesRecieved.nodes.map(
            ({id, title, userFrom, answer}) => ({
              id,
              title,
              userFrom: {...userFrom},
              answer: answer ? {...answer} : null,
            }),
          ),
          answers: [],
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
