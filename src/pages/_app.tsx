import React, {useEffect} from 'react';
import {AppProps} from 'next/app';
import {ApolloProvider} from '@apollo/client';
import {config} from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import {RecoilRoot, useRecoilValue, useSetRecoilState} from 'recoil';
import {useEffectOnce} from 'react-use';

import {createApolloClient, useViewerLazyQuery} from '~/graphql/apollo';
import '~/styles/index.css';
import {viewerState} from '~/states/Viewer';
import {DefaultLayout} from '~/components/layouts/Default';

config.autoAddCss = false;

export const Viewer: React.VFC<Record<string, never>> = ({...props}) => {
  const [loader, {data, loading}] = useViewerLazyQuery();

  const viewer = useRecoilValue(viewerState);
  const setViewer = useSetRecoilState(viewerState);

  useEffectOnce(() => {
    loader();
    if (!viewer) setViewer(null);
  });

  useEffect(() => {
    if (!loading && !data) setViewer(undefined);
    else if (!loading && data)
      setViewer({
        alias: data.viewer.alias,
        displayName: data.viewer.displayName || null,
      });
  }, [loading, data, setViewer]);

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
