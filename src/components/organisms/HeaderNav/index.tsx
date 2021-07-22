import React from 'react';
import Link from 'next/link';
import {useRecoilValue} from 'recoil';
import clsx from 'clsx';

import {viewerState} from '~/states/Viewer';

export type ViewProps = {className?: string} & (
  | {login: false}
  | {login: true; viewer: null}
  | {login: true; viewer: {alias: string; displayName: string | null}}
);
export const View: React.VFC<ViewProps> = ({className, ...props}) => {
  return (
    <nav className={clsx(className)}>
      {!props.login && <Link href="/login">Login</Link>}
      {props.login && !props.viewer && <p>Loading</p>}
      {props.login && props.viewer && (
        <div className={clsx('flex')}>
          <span>{props.viewer.alias}</span>
          <span>{props.viewer.displayName}</span>
        </div>
      )}
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
