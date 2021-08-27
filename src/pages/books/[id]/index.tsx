import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from 'next';
import React from 'react';
import {Merge} from 'type-fest';

import {NextHead} from '~/components/atoms/NextHead';
import {graphqlSdk} from '~/graphql/graphql-request';
import {useTranslation} from '~/i18n/useTranslation';
import {BookTemplate, TransformedProps, transformer} from '~/template/Book';

export type UrlQuery = {id: string};
export const getStaticPaths: GetStaticPaths<UrlQuery> = async () => {
  return graphqlSdk.AllBookPages().then(({allBooks}) => ({
    fallback: 'blocking',
    paths: allBooks.nodes.map(({id}) => ({
      params: {id},
    })),
  }));
};

export const getStaticProps: GetStaticProps<TransformedProps, UrlQuery> =
  async ({params}) => {
    if (!params?.id) return {notFound: true};

    return graphqlSdk
      .BookPage({id: params.id})
      .then(transformer)
      .then((value) =>
        value ? {props: value, revalidate: 60} : {notFound: true},
      );
  };

export type PageProps = Merge<
  {className?: string},
  InferGetStaticPropsType<typeof getStaticProps>
>;
export const Page: NextPage<PageProps> = ({className, book}) => {
  const {LL} = useTranslation();
  return (
    <>
      <NextHead
        title={LL.head.title.book({
          title: book.title,
        })}
      />
      <BookTemplate className={className} book={book} />
    </>
  );
};
export default Page;
