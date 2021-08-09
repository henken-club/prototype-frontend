import clsx from 'clsx';
import React from 'react';

import {useTranslation} from '~/i18n/useTranslation';

export type ViewProps = {
  className?: string;
};
export const MyPage: React.VFC<ViewProps> = ({className}) => {
  const {LL} = useTranslation();
  return (
    <div className={clsx(className)}>
      <p className={clsx('text-white')}>{LL.pageUser.あなたのページです()}</p>
    </div>
  );
};
