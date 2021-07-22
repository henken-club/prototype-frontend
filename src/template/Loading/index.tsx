import clsx from 'clsx';
import React from 'react';

export type ViewProps = {
  className?: string;
};
export const View: React.VFC<ViewProps> = ({className, ...props}) => {
  return (
    <div className={clsx(className)}>
      <span>LOADING</span>
    </div>
  );
};

export const LoadingTemplate = View;
