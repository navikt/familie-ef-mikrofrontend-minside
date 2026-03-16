FROM europe-north1-docker.pkg.dev/cgr-nav/pull-through/nav.no/node:24sha256:53e4aefc1d14c94066119fa30ed8ee2b19c852eb8487eff86783e5344a8fb383

WORKDIR /usr/src/app

COPY ./dist ./dist
COPY ./node_modules ./node_modules

ENV HOST=0.0.0.0
ENV PORT=3000

CMD ["./dist/server/entry.mjs"]

EXPOSE $PORT