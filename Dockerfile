FROM node:18.17.1 AS build
WORKDIR /tmp/savant-metadata-explorer
COPY package.json package-lock.json /tmp/savant-metadata-explorer/
RUN npm install
COPY . /tmp/savant-metadata-explorer
RUN npm run build:prod

FROM nginx:1.17.1-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /tmp/savant-metadata-explorer/dist/savant-metadata-explorer /usr/share/nginx/html