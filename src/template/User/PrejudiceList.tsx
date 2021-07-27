import clsx from 'clsx';
import React from 'react';

import {NextLink} from '~/components/atoms/NextLink';
import {UserIconLink} from '~/components/atoms/UserIconLink';

export const Prejudice: React.VFC<{
  className?: string;
  prejudice: {
    id: string;
    title: string;
    userFrom: {
      alias: string;
      displayName: string;
      picture: string;
    };
    userTo: {
      alias: string;
      displayName: string;
      picture: string;
    };
    answer: {id: string} | null;
  };
}> = ({className, prejudice: {id, title, userFrom, userTo, answer}}) => (
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
    <p
      className={clsx(
        ['col-span-full'],
        ['text-white'],
        ['text-xl'],
        ['font-bold'],
      )}
    >
      {title}
    </p>
    <div className={clsx(['col-span-full'])}>
      {answer && (
        <NextLink href={`/answers/${answer.id}`}>
          <a className={clsx('text-gray-400')}>回答済み</a>
        </NextLink>
      )}
      {!answer && <span className={clsx('text-gray-400')}>未回答</span>}
    </div>
    <div className={clsx(['col-span-1'], ['flex', 'items-center'])}>
      <UserIconLink {...userFrom} size={32} />
      <NextLink href={`/users/${userFrom.alias}`}>
        <a className={clsx('text-white')}>{userFrom.displayName}</a>
      </NextLink>
    </div>
    <div className={clsx(['col-span-1'], ['flex', 'items-center'])}>
      <UserIconLink {...userTo} size={32} />
      <NextLink href={`/users/${userTo.alias}`}>
        <a className={clsx('text-white')}>{userTo.displayName}</a>
      </NextLink>
    </div>
  </div>
);

export const PrejudiceList: React.VFC<{
  className?: string;
  prejudices: React.ComponentProps<typeof Prejudice>['prejudice'][];
}> = ({className, prejudices}) => (
  <div className={clsx(className, ['flex', 'flex-col'], ['space-y-4'])}>
    {prejudices.map((prejudice) => (
      <Prejudice key={prejudice.id} prejudice={prejudice} />
    ))}
  </div>
);
