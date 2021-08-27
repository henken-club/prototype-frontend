import React from 'react';

import {NextLink} from './NextLink';
import {GenericNextLinkProps} from './types';

export const SearchAuthorsNextLink: React.FC<
  GenericNextLinkProps<{query: string; page: number}>
> = ({query, page, ...props}) =>
  page === 1 ? (
    <NextLink {...props} href={`/search/authors?query=${query}`} />
  ) : (
    <NextLink {...props} href={`/search/authors?page=${page}&query=${query}`} />
  );
