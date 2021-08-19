import {GetServerSideProps, InferGetServerSidePropsType, NextPage} from 'next';
import React from 'react';
import {Merge} from 'type-fest';

import {NextHead} from '~/components/atoms/NextHead';
import {graphqlSdk} from '~/graphql/graphql-request';
import {useTranslation} from '~/i18n/useTranslation';
import {
  PageTemplate,
  TransformedProps,
  transformer,
  getVariables,
  parseQuery,
} from '~/template/SearchAuthors';

export const getServerSideProps: GetServerSideProps<
  TransformedProps,
  Record<string, never>
> = async ({query}) => {
  const parsed = parseQuery(query);
  if (!parsed) return {notFound: true};

  return graphqlSdk
    .SearchAuthorsPage(getVariables(parsed))
    .then((result) => transformer(result, parsed))
    .then((value) => ({props: value}));
};

export type PageProps = Merge<
  {className?: string},
  InferGetServerSidePropsType<typeof getServerSideProps>
>;
export const Page: NextPage<PageProps> = ({className, pageInfo, result}) => {
  const {LL} = useTranslation();
  return (
    <>
      <NextHead
        title={LL.head.title.searchAuthors({
          query: pageInfo.query,
          page: pageInfo.pagination.current,
        })}
      />
      <PageTemplate className={className} pageInfo={pageInfo} result={result} />
    </>
  );
};
export default Page;
