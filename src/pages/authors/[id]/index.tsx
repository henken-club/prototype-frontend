import {GetServerSideProps, InferGetServerSidePropsType, NextPage} from 'next';
import React from 'react';
import {Merge} from 'type-fest';

import {NextHead} from '~/components/atoms/NextHead';
import {graphqlSdk} from '~/graphql/graphql-request';
import {useTranslation} from '~/i18n/useTranslation';
import {UserTemplate, ServerSideProps, transformer} from '~/template/Author';

export type UrlQuery = {id: string};
export const getServerSideProps: GetServerSideProps<ServerSideProps, UrlQuery> =
  async ({params}) => {
    if (!params?.id) return {notFound: true};

    return graphqlSdk
      .AuthorPage({id: params.id})
      .then(transformer)
      .then((value) => (value ? {props: value} : {notFound: true}));
  };

export type PageProps = Merge<
  {className?: string},
  InferGetServerSidePropsType<typeof getServerSideProps>
>;
export const Page: NextPage<PageProps> = ({className, author, ...props}) => {
  const {LL} = useTranslation();
  return (
    <>
      <NextHead
        title={LL.head.title.authors({
          name: author.name,
        })}
      />
      <UserTemplate className={className} author={author} />
    </>
  );
};
export default Page;
