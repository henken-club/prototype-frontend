import React from 'react';
import {useRecoilValue} from 'recoil';
import clsx from 'clsx';

import {LoginButton} from './Login';
import {Viewer} from './Viewer';

import {viewerState} from '~/states/Viewer';

export type ViewProps = {className?: string} & (
  | {login: false}
  | {login: true; viewer: null}
  | {login: true; viewer: {alias: string; displayName: string | null}}
);
export const View: React.VFC<ViewProps> = ({className, ...props}) => {
  return (
    <nav className={clsx(className, ['h-16'], ['bg-gray-700'])}>
      <div
        className={clsx(
          ['h-full'],
          ['container', 'mx-auto'],
          ['flex'],
          ['items-center'],
          ['py-2'],
          ['px-4'],
        )}
      >
        <div className={clsx('flex-grow')} />
        <div className={clsx('flex')}>
          {!props.login && <LoginButton />}
          {props.login && !props.viewer && <p>Loading</p>}
          {props.login && props.viewer && <Viewer {...props.viewer} />}
        </div>
      </div>
    </nav>
  );
};

export type ComponentProps = {className?: string};
export const HeaderNav: React.VFC<ComponentProps> = ({...props}) => {
  const viewer = useRecoilValue(viewerState);

  if (viewer === undefined) return <View {...props} login={false} />;
  else if (viewer === null) return <View {...props} login viewer={null} />;
  else
    return (
      <View
        {...props}
        login
        viewer={{alias: viewer.alias, displayName: viewer.displayName}}
      />
    );
};
