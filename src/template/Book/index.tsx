import clsx from 'clsx';
import React from 'react';
import {Merge} from 'type-fest';

import {TransformedProps} from './transformer';

import {Bookcover} from '~/components/atoms/Bookcover';

export * from './transformer';

export type ViewProps = {
  className?: string;
  book: {
    id: string;
    title: string;
    cover: string | null;
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
      <header className={clsx('flex')}>
        <div className={clsx('w-48')}>
          <Bookcover
            className={clsx('h-48')}
            src={book.cover}
            title={book.title}
          />
        </div>
        <div className={clsx('flex', 'flex-col')}>
          <h1 className={clsx('text-white', 'text-2xl')}>{book.title}</h1>
          <ul className={clsx('flex')}>
            {book.authors.nodes.map(({id, name}) => (
              <li key={id}>{name}</li>
            ))}
          </ul>
        </div>
      </header>
    </div>
  );
};

export type ComponentProps = Merge<TransformedProps, {className?: string}>;
export const BookTemplate: React.VFC<ComponentProps> = ({...props}) => {
  return <View {...props} />;
};
