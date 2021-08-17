import {LinkProps} from 'next/link';
import {Merge} from 'type-fest';

export type IndexPage = `/` | `/index`;
export type AboutPage = `/about`;
export type LoginPage = `/login`;
export type TermsPage = `/terms`;
export type ContactPage = `/contact`;

export type AuthorPage = `/authors/${string}`;

export type BookPage = `/books/${string}`;

export type UserPage = `/users/${string}`;

export type UserPrejudicesFromPage = `${UserPage}/from/${string}`;
export type UserPrejudiceFromPage = `${UserPrejudicesFromPage}/${number}`;
export type UserPrejudiceFromAnswerPage = `${UserPrejudiceFromPage}/answer`;

export type UserPrejudicesToPage = `${UserPage}/to/${string}`;
export type UserPrejudiceToPage = `${UserPrejudicesToPage}/${number}`;
export type UserPrejudiceToAnswerPage = `${UserPrejudiceToPage}/answer`;

export type Href =
  | IndexPage
  | AboutPage
  | LoginPage
  | TermsPage
  | ContactPage
  | AuthorPage
  | BookPage
  | UserPage
  | UserPrejudicesFromPage
  | UserPrejudiceFromPage
  | UserPrejudiceFromAnswerPage
  | UserPrejudicesToPage
  | UserPrejudiceToPage
  | UserPrejudiceToAnswerPage;

export type NextLinkProps = Merge<Omit<LinkProps, 'href'>, {href: Href}>;
export type GenericNextLinkProps<T extends Record<string, string | number>> =
  Merge<Omit<NextLinkProps, 'href'>, T>;
