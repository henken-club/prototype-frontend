import clsx from 'clsx';
import React from 'react';
import Link from 'next/link';

export type ViewProps = {
  className?: string;
};
export const View: React.VFC<ViewProps> = ({className, ...props}) => {
  return (
    <div className={clsx(className)}>
      <Link href="/">
        <a>Index</a>
      </Link>
    </div>
  );
};

export const AboutTemplate = View;
