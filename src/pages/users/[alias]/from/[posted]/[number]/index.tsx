import {GetServerSideProps, InferGetServerSidePropsType, NextPage} from 'next';
import React from 'react';
import {Merge} from 'type-fest';

import {NextHead} from '~/components/atoms/NextHead';
import {graphqlSdk} from '~/graphql/graphql-request';
import {useTranslation} from '~/i18n/useTranslation';
import {PrejudiceTemplate} from '~/template/Prejudice';
import {transformerPrejudicePage} from '~/transformer/PrejudicePage';

export type UrlQuery = {alias: string; posted: string; number: string};
export const getServerSideProps: GetServerSideProps<
  Exclude<ReturnType<typeof transformerPrejudicePage>, null>,
  UrlQuery
> = async ({params}) => {
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
      posted: params.alias,
      received: params.posted,
      number: parseInt(params.number, 10),
    })
    .then(transformerPrejudicePage)
    .then((value) => (value ? {props: value} : {notFound: true}));
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
