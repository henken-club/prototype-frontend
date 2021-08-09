import React from 'react';
import clsx from 'clsx';

import {IconLoading} from '~/components/atoms/Icon';

export const Loading: React.VFC<{className?: string}> = ({className}) => (
  <div className={clsx(className)}>
    <IconLoading className={clsx(['text-blue-200', 'text-lg'])} />
  </div>
);
