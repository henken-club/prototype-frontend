import {NextPage} from 'next';
import {useRouter} from 'next/router';
import React, {useEffect} from 'react';
import {useRecoilValue} from 'recoil';

import {NextHead} from '~/components/atoms/NextHead';
import {useTranslation} from '~/i18n/useTranslation';
import {viewerState} from '~/states/Viewer';
import {LoginTemplate} from '~/template/Login';

export type UrlQuery = Record<string, never>;
export type PageProps = {className?: string};

export const Page: NextPage<PageProps> = ({className, ...props}) => {
  const {LL} = useTranslation();
  const viewer = useRecoilValue(viewerState);
  const router = useRouter();

  useEffect(() => {
    if (viewer) router.push('/');
  }, [router, viewer]);

  return (
    <>
      <NextHead title={LL.head.title.login()} />
      <LoginTemplate className={className} />
    </>
  );
};
export default Page;
