import React, {useEffect} from 'react';
import {AppProps} from 'next/app';
import {ApolloProvider} from '@apollo/client';
import {config} from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import {RecoilRoot, useRecoilValue, useSetRecoilState} from 'recoil';

import {createApolloClient, useViewerLazyQuery} from '~/graphql/apollo';
import '~/styles/index.css';
import {viewerState} from '~/states/Viewer';
import {DefaultLayout} from '~/components/layouts/Default';

config.autoAddCss = false;

export const Viewer: React.VFC<Record<string, never>> = ({...props}) => {
  const [loader, {data, loading, called}] = useViewerLazyQuery();

  const viewer = useRecoilValue(viewerState);
  const setViewer = useSetRecoilState(viewerState);

  useEffect(() => {
    if (!viewer) loader();
  }, [loader, viewer]);

  useEffect(() => {
    if (!viewer && called) {
      if (loading) setViewer(null);
      else setViewer(undefined);
    }
  }, [called, data, loading, setViewer, viewer]);

  useEffect(() => {
    if (data)
      setViewer({
        alias: data.viewer.alias,
        displayName: data.viewer.displayName || null,
      });
  }, [data, setViewer]);

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
        <DefaultLayout>
          <PageComponent {...pageProps} />
        </DefaultLayout>
      </RecoilRoot>
    </ApolloProvider>
  );
};

export default App;
