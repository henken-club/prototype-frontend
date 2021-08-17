import React from 'react';

import {NextLink} from './NextLink';
import {GenericNextLinkProps} from './types';

export const UserNextLink: React.FC<GenericNextLinkProps<{alias: string}>> = ({
  alias,
  ...props
}) => <NextLink {...props} href={`/users/${alias}`} />;

export const UserPrejudiceFromNextLink: React.FC<
  GenericNextLinkProps<{base: string; from: string; number: number}>
> = ({base, from, number, ...props}) => (
  <NextLink {...props} href={`/users/${base}/from/${from}/${number}`} />
);

export const UserPrejudiceFromAnswerNextLink: React.FC<
  GenericNextLinkProps<{base: string; from: string; number: number}>
> = ({base, from, number, ...props}) => (
  <NextLink {...props} href={`/users/${base}/from/${from}/${number}/answer`} />
);

export const UserPrejudiceToNextLink: React.FC<
  GenericNextLinkProps<{base: string; to: string; number: number}>
> = ({base, to, number, ...props}) => (
  <NextLink {...props} href={`/users/${base}/to/${to}/${number}`} />
);

export const UserPrejudiceToAnswerNextLink: React.FC<
  GenericNextLinkProps<{base: string; to: string; number: number}>
> = ({base, to, number, ...props}) => (
  <NextLink {...props} href={`/users/${base}/to/${to}/${number}/answer`} />
);
