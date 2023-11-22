FROM node:18.17.1
WORKDIR /tmp/savant-lib
COPY package.json package-lock.json /tmp/savant-lib/
RUN npm install
COPY . /tmp/savant-lib
RUN npm run build:savant-lib

WORKDIR /tmp/savant-lib/dist/savant-lib
