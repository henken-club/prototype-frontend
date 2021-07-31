import clsx from 'clsx';
import React from 'react';

import {AnswersList} from '../molecules/AnswersList';

export const SectionAnswers: React.VFC<{
  className?: string;
  alias: string;
  displayName: string;
  picture: string;
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
  <section className={clsx(className, ['flex', 'flex-col'])}>
    <h2 className={clsx(['text-white'], ['text-2xl'], ['font-bold'])}>回答</h2>
    {answers.length > 0 && (
      <AnswersList className={clsx('mt-4')} answers={answers} />
    )}
    {answers.length === 0 && (
      <p className={clsx('mt-4', ['text-white'])}>ﾅｲﾖｰ</p>
    )}
  </section>
);
