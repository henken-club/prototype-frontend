import React from 'react';
import clsx from 'clsx';

import {NextLink} from '~/components/atoms/NextLink';
import {useTranslation} from '~/i18n/useTranslation';

export type ViewProps = {className?: string};
export const View: React.VFC<ViewProps> = ({className, ...props}) => {
  const {LL} = useTranslation();
  return (
    <footer className={clsx(className, ['bg-gray-700'], ['py-4', 'md:py-8'])}>
      <div className={clsx(['container', 'mx-auto'], ['px-4', 'md:px-0'])}>
        <div className={clsx(['grid'], ['grid-cols-2', 'md:grid-cols-4'])}>
          <div
            className={clsx(
              ['flex', 'flex-col'],
              ['space-y-1', 'md:space-y-2'],
            )}
          >
            <NextLink href="/about">
              <a className={clsx('text-sm', 'text-gray-300')}>
                {LL.footer.About()}
              </a>
            </NextLink>
            <NextLink href="/terms">
              <a className={clsx('text-sm', 'text-gray-300')}>
                {LL.footer.Terms()}
              </a>
            </NextLink>
            <NextLink href="/contact">
              <a className={clsx('text-sm', 'text-gray-300')}>
                {LL.footer.Contact()}
              </a>
            </NextLink>
          </div>
        </div>
        <div className={clsx('mt-4')}>
          <p className={clsx('text-xs', 'text-gray-300')}>
            {LL.footer.copyright()}
          </p>
        </div>
      </div>
    </footer>
  );
};
export const Footer = View;
