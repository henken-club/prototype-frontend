import clsx from 'clsx';
import React from 'react';

import {NextLink} from '~/components/atoms/NextLink';
import {useTranslation} from '~/i18n/useTranslation';

export type ViewProps = {className?: string};
export const View: React.VFC<ViewProps> = ({className, ...props}) => {
  const {LL} = useTranslation();

  return (
    <NextLink href="/login">
      <a
        className={clsx(
          className,
          ['px-2', 'md:px-4'],
          ['py-1', 'md:py-2'],
          ['rounded-sm'],
          ['bg-blue-400'],
          ['text-white'],
          ['text-sm', 'md:text-base'],
          ['font-bold'],
        )}
      >
        {LL.common.ログイン()}
      </a>
    </NextLink>
  );
};

export const LoginButton = View;
