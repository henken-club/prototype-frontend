import clsx from 'clsx';
import React from 'react';

import {SectionAnswers} from './SectionAnswers';
import {SectionPosted, SectionRecived} from './SectionPrejudices';
import {SectionUser} from './SectionUser';

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
    postedPrejudices: {
      id: string;
      title: string;
      userTo: {alias: string; displayName: string; picture: string};
      answer: {id: string} | null;
    }[];
    recievedPrejudices: {
      id: string;
      title: string;
      userFrom: {alias: string; displayName: string; picture: string};
      answer: {id: string} | null;
    }[];
    answers: {
      id: string;
    }[];
  };
};
export const View: React.VFC<ViewProps> = ({className, user}) => {
  return (
    <div className={clsx(className)}>
      <div className={clsx(['flex'], ['flex-col', 'md:flex-row'])}>
        <SectionUser
          className={clsx()}
          alias={user.alias}
          displayName={user.displayName}
          picture={user.picture}
          followers={user.followers}
          followersCount={user.followersCount}
          following={user.following}
          followingCount={user.followingCount}
        />
        <div
          className={clsx(
            'flex-grow',
            ['mt-4', 'ml:mt-0'],
            ['ml-0', 'ml:ml-4'],
            ['grid'],
            ['grid-cols-1', 'lg:grid-cols-2', 'xl:grid-cols-3'],
            ['gap-x-0', 'md:gap-x-4', 'lg:gap-x-8'],
            ['gap-y-4', 'md:gap-x-0'],
          )}
        >
          <SectionPosted
            className={clsx()}
            alias={user.alias}
            displayName={user.displayName}
            picture={user.picture}
            prejudices={user.postedPrejudices}
          />
          <SectionRecived
            className={clsx()}
            alias={user.alias}
            displayName={user.displayName}
            picture={user.picture}
            prejudices={user.recievedPrejudices}
          />
          <SectionAnswers
            className={clsx()}
            alias={user.alias}
            displayName={user.displayName}
            picture={user.picture}
            answers={user.answers}
          />
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
    postedPrejudices: {
      id: string;
      title: string;
      userTo: {alias: string; displayName: string; picture: string};
      answer: {id: string} | null;
    }[];
    recievedPrejudices: {
      id: string;
      title: string;
      userFrom: {alias: string; displayName: string; picture: string};
      answer: {id: string} | null;
    }[];
    answers: {
      id: string;
    }[];
  };
};
export const UserTemplate: React.VFC<ComponentProps> = ({...props}) => {
  return <View {...props} />;
};
