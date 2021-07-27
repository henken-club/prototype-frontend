import clsx from 'clsx';
import React, {useMemo} from 'react';
import {useRecoilValue} from 'recoil';

import {viewerState} from '~/states/Viewer';

export type ViewProps = {
  className?: string;
};
export const View: React.VFC<ViewProps> = ({className}) => {
  return (
    <div className={clsx(className)}>
      <p>This page is yours</p>
    </div>
  );
};

export type ComponentProps = {
  className?: string;
  pageAlias: string;
};
export const MyPage: React.VFC<ComponentProps> = ({pageAlias, ...props}) => {
  const viewer = useRecoilValue(viewerState);
  const isMyPage = useMemo(
    () => viewer?.alias === pageAlias,
    [viewer, pageAlias],
  );

  return isMyPage ? <View {...props} /> : <></>;
};
