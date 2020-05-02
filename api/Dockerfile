FROM node:14.1-alpine3.11

WORKDIR /usr/src/app

COPY yarn.lock package.json ./

RUN yarn

COPY . .

ENV NODE_ENV=production

ENTRYPOINT [ "node", "index.js" ]
