import React from 'react';

import {NextLink} from './NextLink';
import {GenericNextLinkProps} from './types';

export const AuthorNextLink: React.FC<GenericNextLinkProps<{id: string}>> = ({
  id,
  ...props
}) => <NextLink {...props} href={`/authors/${id}`} />;

export const AuthorWritesBooksNextLink: React.FC<
  GenericNextLinkProps<{id: string; page?: number}>
> = ({id, page, ...props}) =>
  page && page !== 1 ? (
    <NextLink {...props} href={`/authors/${id}/books/${page}`} />
  ) : (
    <NextLink {...props} href={`/authors/${id}/books`} />
  );
