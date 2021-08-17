import React from 'react';

import {NextLink} from './NextLink';
import {GenericNextLinkProps} from './types';

export const BookNextLink: React.FC<GenericNextLinkProps<{id: string}>> = ({
  id,
  ...props
}) => <NextLink {...props} href={`/books/${id}`} />;
