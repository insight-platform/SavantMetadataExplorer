# SavantMetadataExplorer

### Run locally

1. $ npm install
2. $ npm run build:savant-lib
3. $ npm run start

### Run in Docker

1. $ docker build -t savant-image .
2. $ docker run --name savant-container --env API_URL=http://176.120.24.131:16686/ -d -p 8080:80 savant-image