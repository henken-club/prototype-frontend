import clsx from 'clsx';
import React from 'react';
import Image from 'next/image';

import {MyPage} from './MyPage';

import {NextLink} from '~/components/atoms/NextLink';

export type ViewProps = {
  className?: string;
  user: {
    alias: string;
    displayName: string;
    picture: string;
    following: {alias: string; displayName: string; picture: string}[];
    followingCount: number;
    followers: {alias: string; displayName: string; picture: string}[];
    followersCount: number;
  };
};
export const View: React.VFC<ViewProps> = ({className, user}) => {
  return (
    <div className={clsx(className)}>
      <MyPage pageAlias={user.alias} />
      <p>{user.alias}</p>
      <p>{user.displayName}</p>
      <Image
        src={user.picture}
        alt={`${user.displayName}(@${user.alias})`}
        width={256}
        height={256}
      />
      <div className={clsx('flex')}>
        <div className={clsx('block')}>
          <span>Followers</span>
          <p>{user.followersCount}</p>
          <div className={clsx('grid', ['grid-cols-8'])}>
            {user.followers.map(({picture, displayName, alias}) => (
              <NextLink key={alias} href={`/users/${alias}`}>
                <a>
                  <Image
                    src={picture}
                    alt={`${displayName}(@${alias})`}
                    width={32}
                    height={32}
                  />
                </a>
              </NextLink>
            ))}
          </div>
        </div>
        <div className={clsx('block')}>
          <span>Following</span>
          <p>{user.followingCount}</p>
          <div className={clsx('grid', ['grid-cols-8'])}>
            {user.following.map(({picture, displayName, alias}) => (
              <NextLink key={alias} href={`/users/${alias}`}>
                <a>
                  <Image
                    src={picture}
                    alt={`${displayName}(@${alias})`}
                    width={32}
                    height={32}
                  />
                </a>
              </NextLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export type ComponentProps = {
  className?: string;
  user: {
    alias: string;
    displayName: string;
    picture: string;
    following: {alias: string; displayName: string; picture: string}[];
    followingCount: number;
    followers: {alias: string; displayName: string; picture: string}[];
    followersCount: number;
  };
};
export const UserTemplate: React.VFC<ComponentProps> = ({...props}) => {
  return <View {...props} />;
};
