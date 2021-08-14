import clsx from 'clsx';
import React from 'react';
import {Merge} from 'type-fest';

import {ServerSideProps} from './transformer';

export * from './transformer';

export type ViewProps = {
  className?: string;
  author: {
    id: string;
    name: string;
  };
};
export const View: React.VFC<ViewProps> = ({className}) => {
  return <div className={clsx(className, 'bg-gray-900')} />;
};

export type ComponentProps = Merge<ServerSideProps, {className?: string}>;
export const UserTemplate: React.VFC<ComponentProps> = ({...props}) => {
  return <View {...props} />;
};
