import clsx from 'clsx';
import React from 'react';

import {WritesBooksList} from '../molecules/WritesBooksList';

import {AuthorNextLink} from '~/components/atoms/NextLink';

export const Section: React.VFC<{
  className?: string;
  result: {
    id: string;
    name: string;
    writesBooks: {
      nodes: {id: string; title: string; cover: string | null}[];
      rest: number;
    };
  }[];
}> = ({className, result}) => (
  <section className={clsx(className)}>
    <ul className={clsx('grid', ['grid-cols-3'], ['gap-x-4'], ['gap-y-4'])}>
      {result.map(({id, name, writesBooks}) => (
        <li
          key={id}
          className={clsx(
            'rounded-sm',
            ['bg-gray-800', ['bg-opacity-50']],
            ['border', ['border-gray-700']],
            ['px-4'],
            ['py-4'],
          )}
        >
          <AuthorNextLink id={id}>
            <a className={clsx('text-white', 'text-2xl')}>{name}</a>
          </AuthorNextLink>
          <WritesBooksList className={clsx('mt-4')} list={writesBooks.nodes} />
        </li>
      ))}
    </ul>
  </section>
);
