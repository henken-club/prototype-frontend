import Link, {LinkProps} from 'next/link';
import React from 'react';
import {Merge} from 'type-fest';

export type Href =
  | `/`
  | `/about`
  | `/index`
  | `/login`
  | `/contact`
  | `/terms`
  | `/users/${string}`
  | `/prejudices/${string}`
  | `/answers/${string}`;

export type NextLinkProps = Merge<Omit<LinkProps, 'href'>, {href: Href}>;
export const NextLink: React.FC<NextLinkProps> = ({...props}) => (
  <Link {...props} />
);
