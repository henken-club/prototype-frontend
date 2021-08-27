import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

export type BookcoverProps = {
  className?: string;
  title: string;
  src: string | null;
};
export const Bookcover: React.VFC<BookcoverProps> = ({
  className,
  title,
  src,
}) => (
  <div className={clsx(className)}>
    {src && (
      <div
        className={clsx('relative', 'h-full', ['bg-black', 'bg-opacity-50'])}
      >
        <Image src={src} alt={title} layout="fill" objectFit="scale-down" />
      </div>
    )}
    {!src && (
      <div className={clsx('h-full', ['bg-gray-200'], ['p-1'])}>
        <span
          className={clsx('block', 'select-none', 'text-xs', 'leading-2', [
            'text-gray-800',
          ])}
        >
          {title}
        </span>
      </div>
    )}
  </div>
);
