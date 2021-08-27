const withPlugins = require('next-compose-plugins');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: Boolean(process.env.ANALYZE),
});

/**
 * @type {import('next/dist/next-server/server/config-shared').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  env: {
    GRAPHQL_API_ENDPOINT: process.env.GRAPHQL_API_ENDPOINT,
    API_ACCESS_TOKEN_KEY: process.env.API_ACCESS_TOKEN_KEY,
    API_REFRESH_TOKEN_KEY: process.env.API_REFRESH_TOKEN_KEY,
  },
  images: {
    domains: [process.env.ALLOWED_IMAGE_DOMAIN],
  },
  i18n: {
    locales: ['ja'],
    defaultLocale: 'ja',
  },
};

module.exports = withPlugins([withBundleAnalyzer], nextConfig);
