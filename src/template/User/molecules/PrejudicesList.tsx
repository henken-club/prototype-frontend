import clsx from 'clsx';
import React from 'react';

import {PrejudiceTo, PrejudiceFrom} from './Prejudice';

export const PrejudiceToList: React.VFC<{
  className?: string;
  prejudices: {
    id: string;
    title: string;
    number: number;
    userPosted: {alias: string; displayName: string; picture: string};
    userReceived: {alias: string; displayName: string; picture: string};
    answer: {id: string} | null;
  }[];
}> = ({className, prejudices}) => (
  <div className={clsx(className, ['flex', 'flex-col'], ['space-y-4'])}>
    {prejudices.map((prejudice) => (
      <PrejudiceTo key={prejudice.id} {...prejudice} />
    ))}
  </div>
);

export const PrejudiceFromList: React.VFC<{
  className?: string;
  prejudices: {
    id: string;
    title: string;
    number: number;
    userPosted: {alias: string; displayName: string; picture: string};
    userReceived: {alias: string; displayName: string; picture: string};
    answer: {id: string} | null;
  }[];
}> = ({className, prejudices}) => (
  <div className={clsx(className, ['flex', 'flex-col'], ['space-y-4'])}>
    {prejudices.map((prejudice) => (
      <PrejudiceFrom key={prejudice.id} {...prejudice} />
    ))}
  </div>
);
