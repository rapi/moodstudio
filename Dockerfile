# Stage 1: deps + build + prune
FROM node:lts-alpine AS builder
WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile      # (1) get dev + prod deps
COPY . .
RUN yarn build                         # compile your app
RUN yarn install --frozen-lockfile --production --ignore-scripts \
    && yarn cache clean               # (2) prune away dev-deps

# Stage 2: copy only the production bits
FROM node:lts-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next        ./.next
COPY --from=builder /app/public       ./public
COPY --from=builder /app/graphql      ./graphql
COPY --from=builder /app/next.config.ts ./

EXPOSE 3000
CMD ["yarn", "start"]