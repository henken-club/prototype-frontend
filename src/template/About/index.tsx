import clsx from 'clsx';
import React from 'react';

import {NextLink} from '~/components/atoms/NextLink';

export type ViewProps = {
  className?: string;
};
export const View: React.VFC<ViewProps> = ({className, ...props}) => {
  return (
    <div className={clsx(className)}>
      <NextLink href="/">
        <a>Index</a>
      </NextLink>
    </div>
  );
};

export const AboutTemplate = View;
