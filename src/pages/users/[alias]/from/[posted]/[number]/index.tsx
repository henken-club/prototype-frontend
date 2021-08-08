import {GetServerSideProps, InferGetServerSidePropsType, NextPage} from 'next';
import React from 'react';
import {Merge} from 'type-fest';

import {NextHead} from '~/components/atoms/NextHead';
import {graphqlSdk} from '~/graphql/graphql-request';
import {useTranslation} from '~/i18n/useTranslation';
import {PrejudiceTemplate} from '~/template/Prejudice';

export type StaticProps = {
  prejudice: {
    title: string;
    number: number;
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
export type UrlQuery = {alias: string; posted: string; number: string};

export const getServerSideProps: GetServerSideProps<StaticProps, UrlQuery> =
  async ({params}) => {
    if (
      !params ||
      !params.alias ||
      !params.posted ||
      !params.number ||
      Number.isNaN(parseInt(params.number, 10))
    )
      return {notFound: true};

    return graphqlSdk
      .PrejudicePage({
        posted: params.posted,
        received: params.alias,
        number: parseInt(params.number, 10),
      })
      .then(({getPrejudice: {prejudice}}) =>
        prejudice
          ? {
              props: {
                prejudice: {
                  title: prejudice.title,
                  number: prejudice.number,
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
  const {LL} = useTranslation();

  return (
    <>
      <NextHead
        title={LL.head.title.usersPrejudice({
          fromDisplayName: prejudice.userFrom.displayName,
          toDisplayName: prejudice.userTo.displayName,
          number: prejudice.number,
        })}
      />
      <PrejudiceTemplate className={className} prejudice={prejudice} />
    </>
  );
};
export default Page;
