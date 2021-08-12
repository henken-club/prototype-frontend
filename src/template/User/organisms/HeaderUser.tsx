import clsx from 'clsx';
import React from 'react';

import {MyPage} from '../atoms/MyPage';
import {useIsMyPage} from '../useIsMyPage';
import {OthersPage} from '../molecules/OthersPage';
import {
  HeaderUserFollowers,
  HeaderUserFollowing,
} from '../molecules/FollowPart';

import {UserIcon} from '~/components/atoms/UserIcon/UserIcon';

export type ViewProps = {
  className?: string;

  id: string;
  alias: string;
  displayName: string;
  picture: string;

  followees: {
    nodes: {id: string; alias: string; displayName: string; picture: string}[];
    count: number;
  };
  followers: {
    nodes: {id: string; alias: string; displayName: string; picture: string}[];
    count: number;
  };

  isMyPage: boolean;
};
export const View: React.VFC<ViewProps> = ({
  className,
  id,
  picture,
  displayName,
  alias,
  isMyPage,
  followees,
  followers,
}) => (
  <header className={clsx(className, ['flex', 'flex-col'])}>
    <div
      className={clsx(
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
      <OthersPage className={clsx(['col-span-full'], 'mt-4')} id={id} />
    )}
    <HeaderUserFollowing
      className={clsx('mt-4')}
      count={followees.count}
      users={followees.nodes}
    />
    <HeaderUserFollowers
      className={clsx('mt-4')}
      count={followers.count}
      users={followers.nodes}
    />
  </header>
);

export const HeaderUser: React.VFC<{
  className?: string;
  id: string;
  alias: string;
  displayName: string;
  picture: string;

  followees: {
    nodes: {id: string; alias: string; displayName: string; picture: string}[];
    count: number;
  };
  followers: {
    nodes: {id: string; alias: string; displayName: string; picture: string}[];
    count: number;
  };
}> = (props) => {
  const isMyPage = useIsMyPage(props.id);

  return <View {...props} isMyPage={isMyPage} />;
};
