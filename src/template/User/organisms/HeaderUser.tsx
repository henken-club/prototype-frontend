import clsx from 'clsx';
import React from 'react';

import {UserGrid} from '../atoms/UserGrid';
import {MyPage} from '../atoms/MyPage';
import {useIsMyPage} from '../useIsMyPage';
import {OthersPage} from '../molecules/OthersPage';

import {UserIcon} from '~/components/atoms/UserIcon/UserIcon';

export type ViewProps = {
  className?: string;

  alias: string;
  displayName: string;
  picture: string;
  following: {alias: string; displayName: string; picture: string}[];
  followingCount: number;
  followers: {alias: string; displayName: string; picture: string}[];
  followersCount: number;

  isMyPage: boolean;
};
export const View: React.VFC<ViewProps> = ({
  className,
  picture,
  displayName,
  alias,
  followers,
  followersCount,
  following,
  followingCount,
  isMyPage,
}) => (
  <header
    className={clsx(
      className,
      [['grid'], ['grid-cols-1', 'sm:grid-cols-2']],
      [['md:flex'], 'flex-col'],
    )}
  >
    <div
      className={clsx(
        ['col-span-full'],
        'flex',
        ['flex-row', 'md:flex-col'],
        ['items-center', 'md:items-start'],
      )}
    >
      <div className={clsx('flex', ['w-24', 'md:w-64'])}>
        <UserIcon
          alias={alias}
          displayName={displayName}
          picture={picture}
          size={256}
        />
      </div>
      <div className={clsx(['ml-4', 'md:ml-0'], ['flex', 'flex-col'])}>
        <p className={clsx(['font-bold'], ['text-2xl'], ['text-white'])}>
          {displayName}
        </p>
        <p className={clsx(['text-xl'], ['text-gray-400'])}>{alias}</p>
      </div>
    </div>
    {isMyPage && <MyPage className={clsx(['col-span-full'], 'mt-4')} />}
    {!isMyPage && (
      <OthersPage className={clsx(['col-span-full'], 'mt-4')} alias={alias} />
    )}
    <div className={clsx('block', 'mt-4')}>
      <p className={clsx(['text-md'], ['text-white'])}>
        <strong className={clsx('font-bold')}>{followersCount}</strong>
        <span>Followers</span>
      </p>
      <UserGrid className={clsx('mt-2')} users={followers} />
    </div>
    <div className={clsx('block', 'mt-4')}>
      <p className={clsx(['text-md'], ['text-white'])}>
        <strong className={clsx('font-bold')}>{followingCount}</strong>
        <span>Following</span>
      </p>
      <UserGrid className={clsx('mt-2')} users={following} />
    </div>
  </header>
);

export const HeaderUser: React.VFC<{
  className?: string;
  alias: string;
  displayName: string;
  picture: string;
  following: {alias: string; displayName: string; picture: string}[];
  followingCount: number;
  followers: {alias: string; displayName: string; picture: string}[];
  followersCount: number;
}> = (props) => {
  const isMyPage = useIsMyPage(props.alias);

  return <View {...props} isMyPage={isMyPage} />;
};
