import React, {useEffect} from 'react';
import {AppProps} from 'next/app';
import {ApolloProvider} from '@apollo/client';
import {config} from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import {RecoilRoot, useRecoilValue, useSetRecoilState} from 'recoil';
import {useEffectOnce} from 'react-use';
import {detectLocale} from 'typesafe-i18n/detectors';

import {createApolloClient, useViewerLazyQuery} from '~/graphql/apollo';
import '~/styles/index.css';
import {viewerState} from '~/states/Viewer';
import {DefaultLayout} from '~/components/layouts/Default';
import TypesafeI18n from '~/i18n/i18n-react';
import {Locales} from '~/i18n/i18n-types';

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
        id: data.viewer.id,
        alias: data.viewer.alias,
        displayName: data.viewer.displayName,
        picture: data.viewer.picture,
      });
  }, [loading, data, setViewer]);

  return <></>;
};

export const App: React.FC<AppProps> = ({
  Component: PageComponent,
  pageProps,
  router,
}) => {
  const detectedLocales = detectLocale(
    router.defaultLocale as Locales,
    router.locales as Locales[],
    () => (router.locale ? [router.locale] : []),
  );
  return (
    <ApolloProvider client={createApolloClient()}>
      <RecoilRoot>
        <Viewer />
        <TypesafeI18n initialLocale={detectedLocales}>
          <DefaultLayout>
            <PageComponent {...pageProps} />
          </DefaultLayout>
        </TypesafeI18n>
      </RecoilRoot>
    </ApolloProvider>
  );
};

export default App;
