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
      number: number;
      userRecieved: {alias: string; displayName: string; picture: string};
      answer: {id: string} | null;
    }[];
    recievedPrejudices: {
      id: string;
      title: string;
      number: number;
      userPosted: {alias: string; displayName: string; picture: string};
      answer: {id: string} | null;
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

    return graphqlSdk
      .UserPage({alias: params.alias})
      .then(({getUser: {user}}) =>
        user
          ? {
              props: {
                user: {
                  alias: user.alias,
                  displayName: user.displayName,
                  picture: user.picture,
                  following: user.following.nodes.map((user) => ({
                    ...user,
                  })),
                  followingCount: user.following.totalCount,
                  followers: user.followers.nodes.map((user) => ({
                    ...user,
                  })),
                  followersCount: user.followers.totalCount,
                  postedPrejudices: user.postedPrejudices.nodes.map(
                    ({id, title, number, recieved, answer}) => ({
                      id,
                      title,
                      number,
                      userRecieved: {...recieved},
                      answer: answer ? {id: answer.id} : null,
                    }),
                  ),
                  recievedPrejudices: user.recievedPrejudices.nodes.map(
                    ({id, title, number, posted, answer}) => ({
                      id,
                      title,
                      number,
                      userPosted: {...posted},
                      answer: answer ? {...answer} : null,
                    }),
                  ),
                  answers: [],
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
export const Page: NextPage<PageProps> = ({className, user, ...props}) => {
  return (
    <>
      <UserTemplate className={className} user={user} />
    </>
  );
};
export default Page;
