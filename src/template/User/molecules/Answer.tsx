import clsx from 'clsx';
import React from 'react';

import {
  AnswerToNextLink,
  PrejudiceFromNextLink,
} from '~/components/atoms/NextLink';

export const Answer: React.VFC<{
  className?: string;
  text: string | null;
  correctness: 'CORRECT' | 'PARTLY_CORRECT' | 'INCORRECT';
  prejudice: {
    title: string;
    number: number;
    userPosted: {alias: string; displayName: string; picture: string};
    userReceived: {alias: string; displayName: string; picture: string};
  };
}> = ({className, text, correctness, prejudice}) => (
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
    <PrejudiceFromNextLink
      base={prejudice.userReceived.alias}
      from={prejudice.userPosted.alias}
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
    </PrejudiceFromNextLink>
    <AnswerToNextLink
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
        {text}
      </a>
    </AnswerToNextLink>
  </div>
);
