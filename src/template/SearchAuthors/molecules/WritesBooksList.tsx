import clsx from 'clsx';
import React from 'react';

import {BookNextLink} from '~/components/atoms/NextLink';
import {Bookcover} from '~/components/atoms/Bookcover';

export type ListItemProps = {
  className?: string;
  id: string;
  cover: string | null;
  title: string;
};
export const ListItem: React.VFC<ListItemProps> = ({
  className,
  id,
  cover,
  title,
}) => (
  <li
    className={clsx(
      className,
      'rounded-sm',
      ['bg-gray-700', ['bg-opacity-50', 'hover:bg-opacity-75']],
      ['border', ['border-gray-700']],
    )}
  >
    <BookNextLink id={id}>
      <a className={clsx('block', 'py-2', 'px-1')}>
        <Bookcover className={clsx('h-28')} src={cover} title={title} />
        <span
          className={clsx(
            'mt-2',
            ['block', 'truncate'],
            'text-center',
            'text-xs',
            'text-white',
          )}
        >
          {title}
        </span>
      </a>
    </BookNextLink>
  </li>
);

export type ListProps = {
  className?: string;
  list: Omit<ListItemProps, 'className'>[];
};
export const WritesBooksList: React.VFC<ListProps> = ({className, list}) => (
  <ul className={clsx(className, 'grid', ['grid-cols-4'], ['gap-x-2'])}>
    {list.map((props) => (
      <ListItem key={props.id} {...props} />
    ))}
  </ul>
);
