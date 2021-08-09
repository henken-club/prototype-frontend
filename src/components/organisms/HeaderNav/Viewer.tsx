import clsx from 'clsx';
import React, {useState} from 'react';

import {UserNextLink} from '~/components/atoms/NextLink';
import {UserIconLink} from '~/components/atoms/UserIconLink';

export type ViewProps = {
  className?: string;
  alias: string;
  displayName: string;
  picture: string;
};
export const View: React.VFC<ViewProps> = ({
  className,
  alias,
  displayName,
  picture,
}) => {
  const [name] = useState<string>(displayName ? displayName : alias);

  return (
    <div className={clsx(className, ['flex', 'items-center'])}>
      <UserIconLink
        size={32}
        alias={alias}
        displayName={displayName}
        picture={picture}
      />
      <UserNextLink alias={alias}>
        <a
          className={clsx('ml-2', ['text-white'], ['text-sm', 'md:text-base'])}
        >
          {name}
        </a>
      </UserNextLink>
    </div>
  );
};

export const Viewer = View;
