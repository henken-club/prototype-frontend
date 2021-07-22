import React from 'react';
import clsx from 'clsx';
import Link from 'next/link';

export type ViewProps = {className?: string};
export const View: React.VFC<ViewProps> = ({className, ...props}) => {
  return (
    <footer className={clsx(className, ['bg-gray-700'])}>
      <Link href="/about">
        <a>About</a>
      </Link>
    </footer>
  );
};
export const Footer = View;
