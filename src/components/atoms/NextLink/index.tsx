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
  {posted: string; received: string; number: number}
>;
export const PrejudiceNextLink: React.FC<PrejudiceNextLinkProps> = ({
  posted,
  received,
  number,
  ...props
}) => (
  <NextLink
    {...props}
    href={`/prejudices/${posted}/${received}/${String(number)}`}
  />
);

export type AnswerNextLinkProps = Merge<
  Omit<NextLinkProps, 'href'>,
  {posted: string; received: string; number: number}
>;
export const AnswerNextLink: React.FC<AnswerNextLinkProps> = ({
  posted,
  received,
  number,
  ...props
}) => (
  <NextLink
    {...props}
    href={`/answers/${posted}/${received}/${String(number)}`}
  />
);
