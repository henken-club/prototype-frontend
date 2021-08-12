import {GetServerSideProps, InferGetServerSidePropsType, NextPage} from 'next';
import React from 'react';
import {Merge} from 'type-fest';

import {NextHead} from '~/components/atoms/NextHead';
import {graphqlSdk} from '~/graphql/graphql-request';
import {useTranslation} from '~/i18n/useTranslation';
import {UserTemplate, ServerSideProps, transformer} from '~/template/User';

export type UrlQuery = {alias: string};
export const getServerSideProps: GetServerSideProps<ServerSideProps, UrlQuery> =
  async ({params}) => {
    if (!params?.alias) return {notFound: true};

    return graphqlSdk
      .UserPage({alias: params.alias})
      .then(transformer)
      .then((value) => (value ? {props: value} : {notFound: true}));
  };

export type PageProps = Merge<
  {className?: string},
  InferGetServerSidePropsType<typeof getServerSideProps>
>;
export const Page: NextPage<PageProps> = ({className, user, ...props}) => {
  const {LL} = useTranslation();
  return (
    <>
      <NextHead
        title={LL.head.title.users({
          alias: user.alias,
          displayName: user.displayName,
        })}
      />
      <UserTemplate className={className} user={user} />
    </>
  );
};
export default Page;
