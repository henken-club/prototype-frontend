import clsx from 'clsx';
import React from 'react';

import {PrejudiceFromList, PrejudiceToList} from '../molecules/PrejudicesList';

export const SectionPrejudicesTemplate: React.VFC<{
  className?: string;
  i18n: Record<'title', string>;
  count: number;
  PrejudicesList: React.VFC<{className?: string}>;
}> = ({className, i18n, PrejudicesList, count}) => (
  <section className={clsx(className, ['flex', 'flex-col'])}>
    <h2 className={clsx(['text-white'], ['text-2xl'], ['font-bold'])}>
      {i18n.title}
    </h2>
    {count > 0 && <PrejudicesList className={clsx('mt-4')} />}
    {count === 0 && <p className={clsx('mt-4', ['text-white'])}>ﾅｲﾖｰ</p>}
  </section>
);

export const SectionPostedPrejudices: React.VFC<{
  className?: string;
  alias: string;
  displayName: string;
  picture: string;
  prejudices: {
    id: string;
    title: string;
    number: number;
    userReceived: {alias: string; displayName: string; picture: string};
    answer: {id: string} | null;
  }[];
}> = ({picture, displayName, alias, prejudices, ...props}) => (
  <SectionPrejudicesTemplate
    {...props}
    i18n={{title: '送信した偏見'}}
    count={prejudices.length}
    PrejudicesList={(props) => (
      <PrejudiceToList
        {...props}
        prejudices={prejudices.map((prejudice) => ({
          ...prejudice,
          userPosted: {alias, displayName, picture},
        }))}
      />
    )}
  />
);

export const SectionReceivedPrejudices: React.VFC<{
  className?: string;
  alias: string;
  displayName: string;
  picture: string;
  prejudices: {
    id: string;
    title: string;
    number: number;
    userPosted: {alias: string; displayName: string; picture: string};
    answer: {id: string} | null;
  }[];
}> = ({picture, displayName, alias, prejudices, ...props}) => (
  <SectionPrejudicesTemplate
    {...props}
    i18n={{title: '受け取った偏見'}}
    count={prejudices.length}
    PrejudicesList={(props) => (
      <PrejudiceFromList
        {...props}
        prejudices={prejudices.map((prejudice) => ({
          ...prejudice,
          userReceived: {alias, displayName, picture},
        }))}
      />
    )}
  />
);
