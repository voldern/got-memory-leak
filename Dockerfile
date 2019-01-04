FROM node:10.12-slim

WORKDIR /usr/src/app

RUN chown node:node /usr/src/app

USER node

COPY package.json package-lock.json /usr/src/app/

RUN npm install --no-save --no-optional

COPY . /usr/src/app/

EXPOSE 3000

CMD [ "node", "index.js" ]