import {GetServerSideProps, NextPage} from 'next';
import React from 'react';
import {useRecoilValue} from 'recoil';

import {viewerState} from '~/states/Viewer';
import {LoadingTemplate} from '~/template/Loading';
import {HomeTemplate} from '~/template/Home';
import {WelcomeTemplate} from '~/template/Welcome';

export type UrlQuery = Record<string, never>;
export type PageProps = Record<string, never>;

export const getServerSideProps: GetServerSideProps<UrlQuery, PageProps> =
  async ({query}) => {
    return {
      props: {},
    };
  };

export const Page: NextPage<PageProps> = ({...props}) => {
  const viewer = useRecoilValue(viewerState);

  return (
    <>
      {viewer === undefined && <WelcomeTemplate />}
      {viewer === null && <LoadingTemplate />}
      {Boolean(viewer) && <HomeTemplate />}
    </>
  );
};
export default Page;
