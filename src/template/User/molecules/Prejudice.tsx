import clsx from 'clsx';
import React from 'react';

import {
  AnswerFromNextLink,
  AnswerToNextLink,
  PrejudiceFromNextLink,
  PrejudiceToNextLink,
  UserNextLink,
} from '~/components/atoms/NextLink';
import {UserIconLink} from '~/components/atoms/UserIconLink';

export const PrejudiceTemplate: React.VFC<{
  className?: string;
  title: string;
  number: number;
  userPosted: {alias: string; displayName: string; picture: string};
  userReceived: {alias: string; displayName: string; picture: string};
  answer: {id: string} | null;
  PrejudiceNextLink: React.FC;
  AnswerNextLink: React.FC;
}> = ({
  className,
  title,
  userPosted,
  userReceived,
  answer,
  PrejudiceNextLink,
  AnswerNextLink,
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
    <PrejudiceNextLink>
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
        <AnswerNextLink>
          <a className={clsx('text-gray-400')}>回答済み</a>
        </AnswerNextLink>
      )}
      {!answer && <span className={clsx('text-gray-400')}>未回答</span>}
    </div>
    <div className={clsx(['col-span-1'], ['flex', 'items-center'])}>
      <UserIconLink {...userPosted} size={24} />
      <UserNextLink alias={userPosted.alias}>
        <a className={clsx(['ml-1'], 'text-sm', 'text-white')}>
          {userPosted.displayName}
        </a>
      </UserNextLink>
    </div>
    <div className={clsx(['col-span-1'], ['flex', 'items-center'])}>
      <UserIconLink {...userReceived} size={24} />
      <UserNextLink alias={userReceived.alias}>
        <a className={clsx(['ml-1'], 'text-sm', 'text-white')}>
          {userReceived.displayName}
        </a>
      </UserNextLink>
    </div>
  </div>
);

export const PrejudiceTo: React.VFC<
  Omit<
    React.ComponentProps<typeof PrejudiceTemplate>,
    'PrejudiceNextLink' | 'AnswerNextLink'
  >
> = ({number, userPosted, userReceived, ...props}) => (
  <PrejudiceTemplate
    {...props}
    number={number}
    userPosted={userPosted}
    userReceived={userReceived}
    PrejudiceNextLink={(props) => (
      <PrejudiceToNextLink
        {...props}
        base={userPosted.alias}
        to={userReceived.alias}
        number={number}
      />
    )}
    AnswerNextLink={(props) => (
      <AnswerToNextLink
        {...props}
        base={userPosted.alias}
        to={userReceived.alias}
        number={number}
      />
    )}
  />
);

export const PrejudiceFrom: React.VFC<
  Omit<
    React.ComponentProps<typeof PrejudiceTemplate>,
    'PrejudiceNextLink' | 'AnswerNextLink'
  >
> = ({number, userPosted, userReceived, ...props}) => (
  <PrejudiceTemplate
    {...props}
    number={number}
    userPosted={userPosted}
    userReceived={userReceived}
    PrejudiceNextLink={(props) => (
      <PrejudiceFromNextLink
        {...props}
        base={userReceived.alias}
        from={userPosted.alias}
        number={number}
      />
    )}
    AnswerNextLink={(props) => (
      <AnswerFromNextLink
        {...props}
        base={userReceived.alias}
        from={userPosted.alias}
        number={number}
      />
    )}
  />
);
