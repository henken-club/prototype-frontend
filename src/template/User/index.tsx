import clsx from 'clsx';
import React from 'react';
import {Merge} from 'type-fest';

import {SectionAnswers} from './organisms/SectionAnswers';
import {
  SectionPostedPrejudices,
  SectionReceivedPrejudices,
} from './organisms/SectionPrejudices';
import {HeaderUser} from './organisms/HeaderUser';
import {ServerSideProps} from './transformer';

export * from './transformer';

export type ViewProps = {
  className?: string;
  user: {
    id: string;
    alias: string;
    displayName: string;
    picture: string;
    followees: {
      nodes: {
        id: string;
        alias: string;
        displayName: string;
        picture: string;
      }[];
      count: number;
    };
    followers: {
      nodes: {
        id: string;
        alias: string;
        displayName: string;
        picture: string;
      }[];
      count: number;
    };
    postedPrejudices: {
      id: string;
      title: string;
      number: number;
      userReceived: {
        id: string;
        alias: string;
        displayName: string;
        picture: string;
      };
      answer: {id: string} | null;
    }[];
    receivedPrejudices: {
      id: string;
      title: string;
      number: number;
      userPosted: {
        id: string;
        alias: string;
        displayName: string;
        picture: string;
      };
      answer: {id: string} | null;
    }[];
    postedAnswers: {
      id: string;
      text: string | null;
      correctness: 'CORRECT' | 'PARTLY_CORRECT' | 'INCORRECT';
      prejudice: {
        title: string;
        number: number;
        userPosted: {
          id: string;
          alias: string;
          displayName: string;
          picture: string;
        };
        userReceived: {
          id: string;
          alias: string;
          displayName: string;
          picture: string;
        };
      };
    }[];
  };
};
export const View: React.VFC<ViewProps> = ({className, user}) => {
  return (
    <div className={clsx(className, 'bg-gray-900')}>
      <div className={clsx(['flex'], ['flex-col', 'md:flex-row'])}>
        <HeaderUser
          className={clsx()}
          id={user.id}
          alias={user.alias}
          displayName={user.displayName}
          picture={user.picture}
          followees={user.followees}
          followers={user.followers}
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
          <SectionPostedPrejudices
            className={clsx()}
            alias={user.alias}
            displayName={user.displayName}
            picture={user.picture}
            prejudices={user.postedPrejudices}
          />
          <SectionReceivedPrejudices
            className={clsx()}
            alias={user.alias}
            displayName={user.displayName}
            picture={user.picture}
            prejudices={user.receivedPrejudices}
          />
          <SectionAnswers
            className={clsx()}
            alias={user.alias}
            displayName={user.displayName}
            picture={user.picture}
            answers={user.postedAnswers}
          />
        </div>
      </div>
    </div>
  );
};

export type ComponentProps = Merge<ServerSideProps, {className?: string}>;
export const UserTemplate: React.VFC<ComponentProps> = ({...props}) => {
  return <View {...props} />;
};
