# Stage 1: Install deps & build
FROM node:lts-alpine AS builder
WORKDIR /app

# Copy package manifests and install deps
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Copy source code and GraphQL definitions
COPY . .
# (if your graphql/ folder lives outside of your normal source tree, you could do:
# COPY ../graphql ./graphql
# instead)

# Build the Next.js application
RUN yarn build

# Stage 2: Runtime image
FROM node:lts-alpine
ENV NODE_ENV=production
WORKDIR /app

# Copy only what's needed for production
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile --production

# Copy built assets and public files
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# Copy graphql folder into the final image
COPY --from=builder /app/graphql ./graphql

# Copy next.config.js (and any other config you need at runtime)
COPY --from=builder /app/next.config.ts ./

EXPOSE 3000
CMD ["yarn", "start"]
