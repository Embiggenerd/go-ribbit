FROM node:11 AS base

# set working directory
WORKDIR /usr/src/app

# install and cache app dependencies
COPY package.json /usr/src/app/package.json
RUN npm install
RUN npm install -g --unsafe-perm expo-cli

# multi stage build for effieciency
FROM base AS build

WORKDIR /usr/src/app

ENV PATH /usr/src/app/node_modules/.bin:$PATH

# simply run npm start after project built
CMD ["npm", "start"]