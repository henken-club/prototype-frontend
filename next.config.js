module.exports = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  env: {
    GRAPHQL_API_ENDPOINT: process.env.GRAPHQL_API_ENDPOINT,
    API_ACCESS_TOKEN_KEY: process.env.API_ACCESS_TOKEN_KEY,
    API_REFRESH_TOKEN_KEY: process.env.API_REFRESH_TOKEN_KEY,
  },
};
