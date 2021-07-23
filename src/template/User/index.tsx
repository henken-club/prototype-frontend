import clsx from 'clsx';
import React from 'react';

export type ViewProps = {
  className?: string;
  user: {
    alias: string;
    displayName: string | null;
  };
};
export const View: React.VFC<ViewProps> = ({className, user}) => {
  return (
    <div className={clsx(className)}>
      <p>{user.alias}</p>
      <p>{user.displayName}</p>
    </div>
  );
};

export type ComponentProps = {
  className?: string;
  user: {
    alias: string;
    displayName: string | null;
  };
};
export const UserTemplate: React.VFC<ComponentProps> = ({...props}) => {
  return <View {...props} />;
};
