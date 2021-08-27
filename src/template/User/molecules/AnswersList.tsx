import clsx from 'clsx';
import React from 'react';

import {Answer} from './Answer';

export const AnswersList: React.VFC<{
  className?: string;
  answers: {
    id: string;
    text: string | null;
    correctness: 'CORRECT' | 'PARTLY_CORRECT' | 'INCORRECT';
    prejudice: {
      title: string;
      number: number;
      userPosted: {alias: string; displayName: string; picture: string};
      userReceived: {alias: string; displayName: string; picture: string};
    };
  }[];
}> = ({className, answers}) => (
  <div className={clsx(className, ['flex', 'flex-col'], ['space-y-4'])}>
    {answers.map((answer) => (
      <Answer key={answer.id} {...answer} />
    ))}
  </div>
);
