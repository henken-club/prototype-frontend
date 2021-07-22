# Install dependencies
FROM node:14.16.1-slim AS deps
WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile && yarn cache clean

# Build
FROM node:14.16.1-slim AS builder
WORKDIR /app

ENV NEXT_TELEMETRY_DISABLED 1
ENV GRAPHQL_API_SCHEMA ./schema.graphql

COPY --from=deps /app/node_modules ./node_modules

COPY \
  .babelrc \
  codegen.yml \
  next-env.d.ts \
  next.config.js \
  package.json \
  postcss.config.js \
  schema.graphql \
  tailwind.config.js \
  tsconfig.json \
  yarn.lock \
  ./
COPY src ./src
COPY public ./public

RUN yarn run codegen
RUN yarn run build

# Run
FROM node:14.16.1-slim AS  runner
WORKDIR /app

ENV PORT 3000
ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next

COPY package.json ./
COPY public ./public

EXPOSE $PORT

CMD ["yarn", "start"]
