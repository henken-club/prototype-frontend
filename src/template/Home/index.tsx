import clsx from 'clsx';
import React from 'react';

export const HomeTemplate: React.VFC<{className?: string}> = ({
  className,
  ...props
}) => {
  return (
    <div className={clsx(className)}>
      <span>Home</span>
    </div>
  );
};
