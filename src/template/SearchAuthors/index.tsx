import clsx from 'clsx';
import React from 'react';
import {Merge} from 'type-fest';

import {TransformedProps} from './transformer';
import {Header} from './organisms/Header';
import {Section} from './organisms/Section';

export * from './transformer';

export type ViewProps = {
  className?: string;
  pageInfo: {
    query: string;
    from: number;
    to: number;
    total: number;
    pagination:
      | {prev: null; current: 1; next: null}
      | {prev: null; current: 1; next: 2}
      | {prev: number; current: number; next: number}
      | {prev: number; current: number; next: null};
  };
  result: {
    id: string;
    name: string;
    writesBooks: {
      nodes: {id: string; title: string; cover: string | null}[];
      rest: number;
    };
  }[];
};
export const View: React.VFC<ViewProps> = ({className, result, pageInfo}) => {
  return (
    <div className={clsx(className, 'bg-gray-900', 'py-8')}>
      <Header
        className={clsx()}
        query={pageInfo.query}
        total={pageInfo.total}
        from={pageInfo.from}
        to={pageInfo.to}
      />
      <Section className={clsx('mt-8')} result={result} />
    </div>
  );
};

export type ComponentProps = Merge<TransformedProps, {className?: string}>;
export const PageTemplate: React.VFC<ComponentProps> = ({...props}) => {
  return <View {...props} />;
};
