import clsx from 'clsx';
import React from 'react';

import {
  AnswerNextLink,
  NextLink,
  PrejudiceNextLink,
} from '~/components/atoms/NextLink';
import {UserIconLink} from '~/components/atoms/UserIconLink';

export const Prejudice: React.VFC<{
  className?: string;
  id: string;
  title: string;
  number: number;
  userPosted: {
    alias: string;
    displayName: string;
    picture: string;
  };
  userReceived: {
    alias: string;
    displayName: string;
    picture: string;
  };
  answer: {id: string} | null;
}> = ({
  className,
  id,
  title,
  number,
  userPosted: posted,
  userReceived: received,
  answer,
}) => (
  <div
    className={clsx(
      className,
      ['grid'],
      ['grid-cols-2', 'lg:grid-cols-1', '2xl:grid-cols-2'],
      ['bg-gray-700'],
      ['px-6'],
      ['py-2'],
    )}
    key={id}
  >
    <PrejudiceNextLink
      posted={posted.alias}
      received={received.alias}
      number={number}
    >
      <a
        className={clsx(
          ['col-span-full'],
          ['text-white'],
          ['text-xl'],
          ['font-bold'],
        )}
      >
        {title}
      </a>
    </PrejudiceNextLink>
    <div className={clsx(['col-span-full'])}>
      {answer && (
        <AnswerNextLink
          posted={posted.alias}
          received={received.alias}
          number={number}
        >
          <a className={clsx('text-gray-400')}>回答済み</a>
        </AnswerNextLink>
      )}
      {!answer && <span className={clsx('text-gray-400')}>未回答</span>}
    </div>
    <div className={clsx(['col-span-1'], ['flex', 'items-center'])}>
      <UserIconLink {...posted} size={32} />
      <NextLink href={`/users/${posted.alias}`}>
        <a className={clsx('text-white')}>{posted.displayName}</a>
      </NextLink>
    </div>
    <div className={clsx(['col-span-1'], ['flex', 'items-center'])}>
      <UserIconLink {...received} size={32} />
      <NextLink href={`/users/${received.alias}`}>
        <a className={clsx('text-white')}>{received.displayName}</a>
      </NextLink>
    </div>
  </div>
);

export const PrejudiceList: React.VFC<{
  className?: string;
  prejudices: {
    id: string;
    title: string;
    number: number;
    userPosted: {
      alias: string;
      displayName: string;
      picture: string;
    };
    userReceived: {
      alias: string;
      displayName: string;
      picture: string;
    };
    answer: {id: string} | null;
  }[];
}> = ({className, prejudices}) => (
  <div className={clsx(className, ['flex', 'flex-col'], ['space-y-4'])}>
    {prejudices.map((prejudice) => (
      <Prejudice key={prejudice.id} {...prejudice} />
    ))}
  </div>
);
