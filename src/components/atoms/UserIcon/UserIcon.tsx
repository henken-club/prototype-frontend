import React from 'react';
import Image from 'next/image';
import clsx from 'clsx';

export type UserIconProps = {
  alias: string;
  displayName: string;
  picture: string;
  size: number;
};
export const UserIcon: React.VFC<UserIconProps> = ({
  alias,
  displayName,
  picture,
  size,
}) => (
  <Image
    className={clsx('rounded-full')}
    src={picture}
    alt={`${displayName}(@${alias})`}
    width={size}
    height={size}
  />
);
