import clsx from 'clsx';
import React from 'react';

import {UserNextLink} from '~/components/atoms/NextLink';
import {UserIcon} from '~/components/atoms/UserIcon/UserIcon';

export const UserIconLink: React.VFC<{
  className?: string;
  alias: string;
  displayName: string;
  picture: string;
  size: number;
}> = ({className, alias, displayName, picture, size}) => (
  <UserNextLink alias={alias}>
    <a className={clsx(className, 'flex')}>
      <UserIcon
        alias={alias}
        picture={picture}
        displayName={displayName}
        size={size}
      />
    </a>
  </UserNextLink>
);
