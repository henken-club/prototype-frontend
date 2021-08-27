import clsx from 'clsx';
import React from 'react';

import {
  UserPrejudiceToAnswerNextLink,
  UserNextLink,
} from '~/components/atoms/NextLink';
import {UserIconLink} from '~/components/atoms/UserIconLink';

export type AnswerProps = {
  className?: string;
  text: string | null;
  correctness: 'CORRECT' | 'PARTLY_CORRECT' | 'INCORRECT';
  prejudice: {
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
  };
};
export const Answer: React.VFC<AnswerProps> = ({
  className,
  text,
  correctness,
  prejudice,
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
  >
    <UserPrejudiceToAnswerNextLink
      base={prejudice.userPosted.alias}
      to={prejudice.userReceived.alias}
      number={prejudice.number}
    >
      <a
        className={clsx(
          ['col-span-full'],
          ['text-white'],
          ['text-xl'],
          ['font-bold'],
        )}
      >
        {prejudice.title}への返答
      </a>
    </UserPrejudiceToAnswerNextLink>
    <div className={clsx(['col-span-full'])}>
      <p>{text}</p>
    </div>
    <div className={clsx(['col-span-1'], ['flex', 'items-center'])}>
      <UserIconLink {...prejudice.userPosted} size={24} />
      <UserNextLink alias={prejudice.userPosted.alias}>
        <a className={clsx(['ml-1'], 'text-sm', 'text-white')}>
          {prejudice.userPosted.displayName}
        </a>
      </UserNextLink>
    </div>
    <div className={clsx(['col-span-1'], ['flex', 'items-center'])}>
      <UserIconLink {...prejudice.userReceived} size={24} />
      <UserNextLink alias={prejudice.userReceived.alias}>
        <a className={clsx(['ml-1'], 'text-sm', 'text-white')}>
          {prejudice.userReceived.displayName}
        </a>
      </UserNextLink>
    </div>
  </div>
);
