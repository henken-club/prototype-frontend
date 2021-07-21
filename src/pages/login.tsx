import {NextPage} from 'next';
import React from 'react';

import {LoginPage} from '~/template/LoginPage';

export type UrlQuery = Record<string, never>;
export type PageProps = Record<string, never>;

export const Page: NextPage<PageProps> = ({...props}) => {
  return (
    <>
      <main>
        <LoginPage />
      </main>
    </>
  );
};
export default Page;
