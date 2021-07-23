import {faSpinner} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React from 'react';

export const IconLoading: React.VFC<{className?: string}> = ({...props}) => (
  <FontAwesomeIcon {...props} icon={faSpinner} spin />
);
