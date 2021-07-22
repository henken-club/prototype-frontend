import {NextPage} from 'next';
import {useRouter} from 'next/router';
import React, {useEffect} from 'react';
import {useRecoilValue} from 'recoil';

import {viewerState} from '~/states/Viewer';
import {LoginPage} from '~/template/Login';

export type UrlQuery = Record<string, never>;
export type PageProps = Record<string, never>;

export const Page: NextPage<PageProps> = ({...props}) => {
  const viewer = useRecoilValue(viewerState);
  const router = useRouter();

  useEffect(() => {
    if (viewer) router.push('/');
  }, [router, viewer]);

  return (
    <>
      <LoginPage />
    </>
  );
};
export default Page;
