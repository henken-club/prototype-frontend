# Install all dependencies
FROM node:14.16.1-slim AS deps
WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile && yarn cache clean

# Build
FROM deps AS builder
WORKDIR /app

ENV NEXT_TELEMETRY_DISABLED 1
ENV GRAPHQL_API_SCHEMA ./schema.graphql

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


# Install production dependencies
FROM deps AS deps-production
WORKDIR /app

RUN npm prune --production

# Run
FROM node:14.16.1-slim AS runner
WORKDIR /app

ENV PORT 3000
ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

COPY --from=deps-production /app/node_modules ./node_modules

COPY --from=builder /app/package.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

EXPOSE $PORT

CMD ["yarn", "start"]
