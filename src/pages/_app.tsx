import React, {useEffect} from 'react';
import {AppProps} from 'next/app';
import {ApolloProvider} from '@apollo/client';
import {config} from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import {RecoilRoot, useSetRecoilState} from 'recoil';

import {createApolloClient, useViewerQuery} from '~/graphql/apollo';
import '~/styles/global.css';
import {viewerState} from '~/states/Viewer';
import {HeaderNav} from '~/components/organisms/HeaderNav';

config.autoAddCss = false;

export const Viewer: React.VFC<Record<string, never>> = ({...props}) => {
  const {data, loading, error} = useViewerQuery();
  const setViewer = useSetRecoilState(viewerState);

  useEffect(() => {
    if (data)
      setViewer({
        alias: data.viewer.alias,
        displayName: data.viewer.displayName || null,
      });
    else if (loading) setViewer(null);
    else setViewer(undefined);
  }, [data, loading, setViewer]);

  return <></>;
};

export const App: React.FC<AppProps> = ({
  Component: PageComponent,
  pageProps,
}) => {
  return (
    <ApolloProvider client={createApolloClient()}>
      <RecoilRoot>
        <Viewer />
        <>
          <HeaderNav />
          <PageComponent {...pageProps} />
        </>
      </RecoilRoot>
    </ApolloProvider>
  );
};

export default App;
