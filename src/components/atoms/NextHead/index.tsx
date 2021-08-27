import Head from 'next/head';
import React from 'react';

export const NextHead: React.FC<{title: string}> = ({
  children,
  title,
  ...props
}) => {
  return (
    <Head {...props}>
      <title>{title}</title>
      {children}
    </Head>
  );
};
