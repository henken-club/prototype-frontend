import clsx from 'clsx';
import React from 'react';

export const SectionAnswers: React.VFC<{
  className?: string;
  alias: string;
  displayName: string;
  picture: string;
  answers: {
    id: string;
  }[];
}> = ({className, answers}) => (
  <section className={clsx(className, ['flex', 'flex-col'])}>
    <h2 className={clsx(['text-white'], ['text-2xl'], ['font-bold'])}>回答</h2>
    {answers.length === 0 && (
      <p className={clsx('mt-4', ['text-white'])}>ﾅｲﾖｰ</p>
    )}
  </section>
);
