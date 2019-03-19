FROM node:11-alpine

# set working directory
WORKDIR /usr/src/app

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# install app dependencies
RUN npm install -g nodemon  

# copy package to be installed in compose file
COPY package.json /usr/src/app/package.json

# install dependencies
RUN npm install 
# RUN npm install react-scripts@1.1.1 -g --silent

# start app
CMD ["nodemon", "."]