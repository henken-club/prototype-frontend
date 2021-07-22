import clsx from 'clsx';
import React from 'react';

import {Footer} from '~/components/organisms/Footer';
import {HeaderNav} from '~/components/organisms/HeaderNav';

export type ComponentProps = {className?: string};
export const DefaultLayout: React.FC<ComponentProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div className={clsx(className, ['min-h-screen'], ['flex', 'flex-col'])}>
      <HeaderNav className={clsx(['w-full'])} />
      <main className={clsx(['container', 'mx-auto'], [])}>{children}</main>
      <Footer className={clsx(['w-full', 'mt-auto'])} />
    </div>
  );
};
