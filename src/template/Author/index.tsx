import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';
import {Merge} from 'type-fest';

import {TransformedProps} from './transformer';

export * from './transformer';

export type ViewProps = {
  className?: string;
  author: {
    id: string;
    name: string;
    writesBooks: {
      count: number;
      nodes: {
        id: string;
        title: string;
        cover: string | null;
      }[];
    };
  };
};
export const View: React.VFC<ViewProps> = ({className, author}) => {
  return (
    <div className={clsx(className, 'bg-gray-900')}>
      <header>
        <h1 className={clsx('text-white', 'text-2xl')}>{author.name}</h1>
      </header>
      <section>
        <div className={clsx('grid', ['grid-cols-10'], ['gap-x-4'])}>
          {author.writesBooks.nodes.map(({id, title, cover}) => (
            <div key={id} className={clsx('flex', 'flex-col')}>
              <div className={clsx('relative', 'w-full', 'h-48')}>
                {cover && (
                  <Image src={cover} layout="fill" objectFit="scale-down" />
                )}
              </div>
              <span className={clsx(['block'], ['text-white', 'text-xs'])}>
                {title}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export type ComponentProps = Merge<TransformedProps, {className?: string}>;
export const UserTemplate: React.VFC<ComponentProps> = ({...props}) => {
  return <View {...props} />;
};
