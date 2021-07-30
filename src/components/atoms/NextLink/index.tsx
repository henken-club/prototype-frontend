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
  | `/prejudices/${string}/${string}/${string}`
  | `/answers/${string}/${string}/${string}`;

export type NextLinkProps = Merge<Omit<LinkProps, 'href'>, {href: Href}>;
export const NextLink: React.FC<NextLinkProps> = ({...props}) => (
  <Link {...props} />
);

export type PrejudiceNextLinkProps = Merge<
  Omit<NextLinkProps, 'href'>,
  {posted: string; recieved: string; number: number}
>;
export const PrejudiceNextLink: React.FC<PrejudiceNextLinkProps> = ({
  posted,
  recieved,
  number,
  ...props
}) => (
  <NextLink
    {...props}
    href={`/prejudices/${posted}/${recieved}/${String(number)}`}
  />
);

export type AnswerNextLinkProps = Merge<
  Omit<NextLinkProps, 'href'>,
  {posted: string; recieved: string; number: number}
>;
export const AnswerNextLink: React.FC<AnswerNextLinkProps> = ({
  posted,
  recieved,
  number,
  ...props
}) => (
  <NextLink
    {...props}
    href={`/answers/${posted}/${recieved}/${String(number)}`}
  />
);
