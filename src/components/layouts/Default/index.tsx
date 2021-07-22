import clsx from 'clsx';
import React from 'react';

import {HeaderNav} from '~/components/organisms/HeaderNav';

export type ComponentProps = {className?: string};
export const DefaultLayout: React.FC<ComponentProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div className={clsx(className)}>
      <HeaderNav className={clsx(['w-full'])} />
      <main>{children}</main>
    </div>
  );
};
