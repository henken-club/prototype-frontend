import clsx from 'clsx';
import React from 'react';

import {UserIconLink} from '~/components/atoms/UserIconLink';

export type ViewProps = {
  className?: string;
  prejudice: {
    title: string;
    userFrom: {
      alias: string;
      displayName: string;
      picture: string;
    };
    userTo: {
      alias: string;
      displayName: string;
      picture: string;
    };
  };
};
export const View: React.VFC<ViewProps> = ({className, prejudice}) => {
  return (
    <div className={clsx(className)}>
      <p>{prejudice.title}</p>
      <div className={clsx(['flex', 'items-center'])}>
        <UserIconLink {...prejudice.userFrom} size={64} />
        <p>{prejudice.userFrom.displayName}から</p>
      </div>
      <div className={clsx(['flex', 'items-center'])}>
        <UserIconLink {...prejudice.userTo} size={64} />
        <p>{prejudice.userTo.displayName}へ</p>
      </div>
    </div>
  );
};

export type ComponentProps = {
  className?: string;
  prejudice: {
    title: string;
    userFrom: {
      alias: string;
      displayName: string;
      picture: string;
    };
    userTo: {
      alias: string;
      displayName: string;
      picture: string;
    };
  };
};
export const PrejudiceTemplate: React.VFC<ComponentProps> = ({...props}) => {
  return <View {...props} />;
};
