import clsx from 'clsx';
import React from 'react';

import {PrejudiceList} from './PrejudiceList';

export const SectionPrejudices: React.VFC<{
  className?: string;
  i18n: Record<'title', string>;
  prejudices: {
    id: string;
    title: string;
    userFrom: {alias: string; displayName: string; picture: string};
    userTo: {alias: string; displayName: string; picture: string};
    answer: {id: string} | null;
  }[];
}> = ({className, i18n, prejudices}) => (
  <section className={clsx(className, ['flex', 'flex-col'])}>
    <h2 className={clsx(['text-white'], ['text-2xl'], ['font-bold'])}>
      {i18n.title}
    </h2>
    {prejudices.length > 0 && (
      <PrejudiceList className={clsx('mt-4')} prejudices={prejudices} />
    )}
    {prejudices.length === 0 && (
      <p className={clsx('mt-4', ['text-white'])}>ﾅｲﾖｰ</p>
    )}
  </section>
);

export const SectionPosted: React.VFC<{
  className?: string;
  alias: string;
  displayName: string;
  picture: string;
  prejudices: {
    id: string;
    title: string;
    userTo: {alias: string; displayName: string; picture: string};
    answer: {id: string} | null;
  }[];
}> = ({picture, displayName, alias, prejudices, ...props}) => (
  <SectionPrejudices
    {...props}
    i18n={{title: '送信した偏見'}}
    prejudices={prejudices.map((prejudice) => ({
      ...prejudice,
      userFrom: {
        alias,
        displayName,
        picture,
      },
    }))}
  />
);

export const SectionRecived: React.VFC<{
  className?: string;
  alias: string;
  displayName: string;
  picture: string;
  prejudices: {
    id: string;
    title: string;
    userFrom: {alias: string; displayName: string; picture: string};
    answer: {id: string} | null;
  }[];
}> = ({picture, displayName, alias, prejudices, ...props}) => (
  <SectionPrejudices
    {...props}
    i18n={{title: '受け取った偏見'}}
    prejudices={prejudices.map((prejudice) => ({
      ...prejudice,
      userTo: {
        alias,
        displayName,
        picture,
      },
    }))}
  />
);
