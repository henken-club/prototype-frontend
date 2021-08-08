import clsx from 'clsx';
import React from 'react';

export type ViewProps = {
  className?: string;
};
export const MyPage: React.VFC<ViewProps> = ({className}) => {
  return (
    <div className={clsx(className)}>
      <p className={clsx('text-white')}>This page is yours</p>
    </div>
  );
};
