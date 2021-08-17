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
  <div className={clsx(className, 'relative')}>
    {src && (
      <Image src={src} alt={title} layout="fill" objectFit="scale-down" />
    )}
    {!src && <span>{title}</span>}
  </div>
);
