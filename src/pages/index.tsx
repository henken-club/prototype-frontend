import {GetServerSideProps, NextPage} from 'next';
import React from 'react';
import {useRecoilValue} from 'recoil';

import {viewerState} from '~/states/Viewer';
import {LoadingTemplate} from '~/template/Loading';
import {HomeTemplate} from '~/template/Home';
import {WelcomeTemplate} from '~/template/Welcome';
import {useTranslation} from '~/i18n/useTranslation';
import {NextHead} from '~/components/atoms/NextHead';

export type UrlQuery = Record<string, never>;
export type PageProps = {className?: string};

export const getServerSideProps: GetServerSideProps<UrlQuery, PageProps> =
  async ({query}) => {
    return {
      props: {},
    };
  };

export const Page: NextPage<PageProps> = ({className, ...props}) => {
  const {LL} = useTranslation();
  const viewer = useRecoilValue(viewerState);

  return (
    <>
      {viewer === undefined && (
        <>
          <NextHead title={LL.head.title.welcome()} />
          <WelcomeTemplate className={className} />
        </>
      )}
      {viewer === null && (
        <>
          <NextHead title={LL.head.title.loading()} />
          <LoadingTemplate className={className} />
        </>
      )}
      {Boolean(viewer) && (
        <>
          <NextHead title={LL.head.title.home()} />
          <HomeTemplate className={className} />
        </>
      )}
    </>
  );
};
export default Page;
