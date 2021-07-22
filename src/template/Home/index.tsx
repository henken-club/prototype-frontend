import clsx from 'clsx';
import React from 'react';
import Link from 'next/link';

export const HomeTemplate: React.VFC<{className?: string}> = ({
  className,
  ...props
}) => {
  return (
    <div className={clsx(className)}>
      <span>Home</span>
      <Link href="/about">
        <a>about</a>
      </Link>
    </div>
  );
};
