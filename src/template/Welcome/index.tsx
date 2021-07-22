import clsx from 'clsx';
import React from 'react';
import Link from 'next/link';

export const WelcomeTemplate: React.VFC<{className?: string}> = ({
  className,
  ...props
}) => {
  return (
    <div className={clsx(className)}>
      <span>WELCOME</span>
      <Link href="/login">Login</Link>
    </div>
  );
};
