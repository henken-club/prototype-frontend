import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';

export type ViewProps = {className?: string};
export const View: React.VFC<ViewProps> = ({className, ...props}) => {
  return (
    <Link href="/login">
      <a
        className={clsx(
          className,
          ['px-2', 'md:px-4'],
          ['py-1', 'md:py-2'],
          ['rounded-sm'],
          ['bg-blue-400'],
          ['text-white'],
          ['text-sm', 'md:text-base'],
          ['font-bold'],
        )}
      >
        Login
      </a>
    </Link>
  );
};

export const LoginButton = View;
