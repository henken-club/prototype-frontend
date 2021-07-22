import * as nextImage from 'next/image';
import {addDecorator} from '@storybook/react';
import {withNextRouter} from 'storybook-addon-next-router';

addDecorator(withNextRouter());

Object.defineProperty(nextImage, 'default', {
  configurable: true,
  value: (props) => <img {...props} />,
});

export const parameters = {
  actions: {
    argTypesRegex: '^on[A-Z].*',
  },
  storySort: {
    method: 'alphabetical',
  },
};
