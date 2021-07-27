import clsx from 'clsx';
import React from 'react';

import {NextLink} from '~/components/atoms/NextLink';

export const HomeTemplate: React.VFC<{className?: string}> = ({
  className,
  ...props
}) => {
  return (
    <div className={clsx(className)}>
      <span>Home</span>
      <NextLink href="/about">
        <a>about</a>
      </NextLink>
    </div>
  );
};
