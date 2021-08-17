import React from 'react';

import {NextLink} from './NextLink';
import {GenericNextLinkProps} from './types';

export const AuthorNextLink: React.FC<GenericNextLinkProps<{id: string}>> = ({
  id,
  ...props
}) => <NextLink {...props} href={`/authors/${id}`} />;
