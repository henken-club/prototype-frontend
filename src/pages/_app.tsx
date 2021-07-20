import '@fortawesome/fontawesome-svg-core/styles.css';
import {config} from '@fortawesome/fontawesome-svg-core';
import {AppProps} from 'next/app';
import React from 'react';

import '~/styles/global.css';

config.autoAddCss = false;

export const App: React.FC<AppProps> = ({
  Component: PageComponent,
  pageProps,
}) => {
  return <PageComponent {...pageProps} />;
};

export default App;
