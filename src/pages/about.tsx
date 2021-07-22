import {NextPage} from 'next';
import React from 'react';

import {AboutTemplate} from '~/template/About';

export type UrlQuery = Record<string, never>;
export type PageProps = {className?: string};

export const Page: NextPage<PageProps> = ({className, ...props}) => {
  return (
    <>
      <AboutTemplate className={className} />
    </>
  );
};
export default Page;
