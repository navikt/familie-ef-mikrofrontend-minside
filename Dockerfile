FROM node:24-alpine AS base
WORKDIR /usr/src/app

RUN npm config set @navikt:registry=https://npm.pkg.github.com


FROM base AS build
COPY ./src ./src
COPY astro.config.mjs ./
COPY package.json ./
COPY package-lock.json ./
COPY tsconfig.json ./

RUN --mount=type=secret,id=NODE_AUTH_TOKEN \
    NODE_AUTH_TOKEN="$(cat /run/secrets/NODE_AUTH_TOKEN)" \
    npm ci --ignore-scripts

RUN npm run build


FROM base AS prod-deps
COPY package.json ./
COPY package-lock.json ./
RUN --mount=type=secret,id=NODE_AUTH_TOKEN \
    NODE_AUTH_TOKEN="$(cat /run/secrets/NODE_AUTH_TOKEN)" \
    npm ci --ignore-scripts --omit=dev

FROM gcr.io/distroless/nodejs24-debian12 AS runtime
WORKDIR /usr/src/app
COPY --from=prod-deps /usr/src/app/node_modules ./node_modules
COPY --from=build /usr/src/app/dist ./dist

ENV TZ="Europe/Oslo"
ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=3000

CMD ["./dist/server/entry.mjs"]
