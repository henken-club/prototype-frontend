import clsx from 'clsx';
import React from 'react';

import {UserIconLink} from '~/components/atoms/UserIconLink';

export const UserGrid: React.VFC<{
  className?: string;
  users: {alias: string; displayName: string; picture: string}[];
}> = ({className, users}) => (
  <div className={clsx(className, 'grid', ['grid-cols-8'], ['gap-1'])}>
    {users.map((user) => (
      <UserIconLink key={user.alias} size={32} {...user} />
    ))}
  </div>
);
