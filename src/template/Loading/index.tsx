import clsx from 'clsx';
import React from 'react';

export const LoadingTemplate: React.VFC<{className?: string}> = ({
  className,
  ...props
}) => {
  return (
    <div className={clsx(className)}>
      <span>LOADING</span>
    </div>
  );
};
