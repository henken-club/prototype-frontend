import clsx from 'clsx';
import React from 'react';
import {Merge} from 'type-fest';

import {TransformedProps} from './transformer';

export * from './transformer';

export type ViewProps = {
  className?: string;
  book: {
    id: string;
    title: string;
    authors: {
      count: number;
      nodes: {
        id: string;
        name: string;
      }[];
    };
  };
};
export const View: React.VFC<ViewProps> = ({className, book}) => {
  return (
    <div className={clsx(className, 'bg-gray-900')}>
      <header>
        <h1 className={clsx('text-white', 'text-2xl')}>{book.title}</h1>
        <ul className={clsx('flex')}>
          {book.authors.nodes.map(({id, name}) => (
            <li key={id}>{name}</li>
          ))}
        </ul>
      </header>
    </div>
  );
};

export type ComponentProps = Merge<TransformedProps, {className?: string}>;
export const BookTemplate: React.VFC<ComponentProps> = ({...props}) => {
  return <View {...props} />;
};
