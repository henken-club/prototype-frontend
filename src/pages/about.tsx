import {NextPage} from 'next';
import React from 'react';

import {NextHead} from '~/components/atoms/NextHead';
import {useTranslation} from '~/i18n/useTranslation';
import {AboutTemplate} from '~/template/About';

export type UrlQuery = Record<string, never>;
export type PageProps = {className?: string};

export const Page: NextPage<PageProps> = ({className, ...props}) => {
  const {LL} = useTranslation();
  return (
    <>
      <NextHead title={LL.head.title.about()} />
      <AboutTemplate className={className} />
    </>
  );
};
export default Page;
