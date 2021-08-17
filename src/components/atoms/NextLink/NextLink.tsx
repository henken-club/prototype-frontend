import Link from 'next/link';
import React from 'react';

import {NextLinkProps} from './types';

export const NextLink: React.FC<NextLinkProps> = ({...props}) => (
  <Link {...props} />
);
