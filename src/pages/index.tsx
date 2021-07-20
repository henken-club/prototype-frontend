import {GetServerSideProps, NextPage} from 'next';
import React from 'react';

export type UrlQuery = Record<string, never>;
export type PageProps = Record<string, never>;

export const getServerSideProps: GetServerSideProps<UrlQuery, PageProps> =
  async ({query}) => {
    return {
      props: {},
    };
  };

export const Page: NextPage<PageProps> = ({...props}) => {
  return (
    <>
      <main />
    </>
  );
};
export default Page;
