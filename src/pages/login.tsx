import {NextPage} from 'next';
import {useRouter} from 'next/router';
import React, {useEffect} from 'react';
import {useRecoilValue} from 'recoil';

import {viewerState} from '~/states/Viewer';
import {LoginTemplate} from '~/template/Login';

export type UrlQuery = Record<string, never>;
export type PageProps = {className?: string};

export const Page: NextPage<PageProps> = ({className, ...props}) => {
  const viewer = useRecoilValue(viewerState);
  const router = useRouter();

  useEffect(() => {
    if (viewer) router.push('/');
  }, [router, viewer]);

  return (
    <>
      <LoginTemplate className={className} />
    </>
  );
};
export default Page;
