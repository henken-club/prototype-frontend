import clsx from 'clsx';
import React from 'react';

import {UserGrid, UserGridProps} from '../atoms/UserGrid';

import {useTranslation} from '~/i18n/useTranslation';

export const HeaderUserTmpl: React.VFC<{
  className?: string;
  count: number;
  users: UserGridProps['users'];
  i18n: {text: string};
}> = ({className, users, count, i18n}) => {
  return (
    <div className={clsx(className)}>
      <span className={clsx(['text-md'], ['text-white'])}>{i18n.text}</span>
      <UserGrid className={clsx('mt-2')} users={users} />
    </div>
  );
};

export const HeaderUserFollowing: React.VFC<
  Omit<React.ComponentProps<typeof HeaderUserTmpl>, 'i18n'>
> = ({...props}) => {
  const {LL} = useTranslation();
  return (
    <HeaderUserTmpl
      {...props}
      i18n={{
        text: LL.count.フォロイー({count: props.count}),
      }}
    />
  );
};

export const HeaderUserFollowers: React.VFC<
  Omit<React.ComponentProps<typeof HeaderUserTmpl>, 'i18n'>
> = ({...props}) => {
  const {LL} = useTranslation();
  return (
    <HeaderUserTmpl
      {...props}
      i18n={{
        text: LL.count.フォロワー({count: props.count}),
      }}
    />
  );
};
