import clsx from 'clsx';
import React from 'react';

export const Modal: React.FC<{close(): void}> = ({
  close,
  children,
  ...props
}) => {
  return (
    <div
      className={clsx('fixed', 'inset-0', 'z-infinity', [
        'flex',
        'justify-center',
        'items-center',
      ])}
    >
      <div
        className={clsx('cursor-pointer', 'absolute', 'inset-0', 'z-0', [
          'bg-black',
          'bg-opacity-75',
        ])}
        onClick={close}
        onKeyPress={close}
      />
      <div className={clsx('absolute', 'm-auto', 'z-1')}>{children}</div>
    </div>
  );
};
