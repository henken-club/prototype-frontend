import {
  faCog,
  faExclamationTriangle,
  faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React from 'react';

export const IconWarning: React.VFC<{className?: string}> = ({...props}) => (
  <FontAwesomeIcon {...props} icon={faExclamationTriangle} />
);

export const IconLoading: React.VFC<{className?: string}> = ({...props}) => (
  <FontAwesomeIcon {...props} icon={faSpinner} spin />
);

export const IconSetting: React.VFC<{className?: string}> = ({...props}) => (
  <FontAwesomeIcon {...props} icon={faCog} />
);
