import * as nextImage from 'next/image';
import {RouterContext} from 'next/dist/next-server/lib/router-context';

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
  nextRouter: {
    Provider: RouterContext.Provider,
  },
};
