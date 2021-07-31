import Link, {LinkProps} from 'next/link';
import React from 'react';
import {Merge} from 'type-fest';

export type StaticPage =
  | `/`
  | `/about`
  | `/index`
  | `/login`
  | `/contact`
  | `/terms`;
export type UserPage = `/users/${string}`;
export type PrejudicesPage =
  | `${UserPage}/from/${string}`
  | `${UserPage}/to/${string}`;
export type PrejudicePage = `${PrejudicesPage}/${number}`;
export type AnswerPage = `${PrejudicePage}/answer`;
export type Href =
  | StaticPage
  | UserPage
  | PrejudicesPage
  | PrejudicePage
  | AnswerPage;

export type NextLinkProps = Merge<Omit<LinkProps, 'href'>, {href: Href}>;
export type SpecificLink<T> = React.FC<Merge<Omit<NextLinkProps, 'href'>, T>>;

export const NextLink: React.FC<NextLinkProps> = ({...props}) => (
  <Link {...props} />
);

export const UserNextLink: SpecificLink<{alias: string}> = ({
  alias,
  ...props
}) => <NextLink {...props} href={`/users/${alias}`} />;

export const PrejudiceFromNextLink: SpecificLink<{
  base: string;
  from: string;
  number: number;
}> = ({base, from, number, ...props}) => (
  <NextLink {...props} href={`/users/${base}/from/${from}/${number}`} />
);

export const PrejudiceToNextLink: SpecificLink<{
  base: string;
  to: string;
  number: number;
}> = ({base, to, number, ...props}) => (
  <NextLink {...props} href={`/users/${base}/to/${to}/${number}`} />
);

export const AnswerFromNextLink: SpecificLink<{
  base: string;
  from: string;
  number: number;
}> = ({base, from, number, ...props}) => (
  <NextLink {...props} href={`/users/${base}/from/${from}/${number}/answer`} />
);

export const AnswerToNextLink: SpecificLink<{
  base: string;
  to: string;
  number: number;
}> = ({base, to, number, ...props}) => (
  <NextLink {...props} href={`/users/${base}/to/${to}/${number}/answer`} />
);
