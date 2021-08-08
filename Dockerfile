# Install all dependencies
FROM node:14.16.1-slim AS deps
WORKDIR /app

COPY package.json yarn.lock .yarnrc ./
COPY .yarn ./.yarn
RUN yarn install --frozen-lockfile && yarn cache clean

# Install production dependencies
FROM deps AS deps-production
WORKDIR /app

RUN npm prune --production

# Build
FROM deps AS builder
WORKDIR /app

ENV NEXT_TELEMETRY_DISABLED 1
ENV GRAPHQL_API_SCHEMA ./schema.graphql
ENV ALLOWED_IMAGE_DOMAIN henken.club

COPY schema.graphql codegen.yml ./
COPY src/graphql ./src/graphql
RUN yarn run gqlgen

COPY .typesafe-i18n.json ./
COPY src/i18n ./src/i18n
RUN yarn run i18ngen

COPY \
  .babelrc \
  next-env.d.ts \
  next.config.js \
  postcss.config.js \
  tailwind.config.js \
  tsconfig.json \
  ./
COPY src ./src
COPY public ./public

RUN yarn run build

# Run
FROM deps-production AS runner
WORKDIR /app

ENV PORT 3000
ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./

EXPOSE $PORT

CMD ["yarn", "start"]
