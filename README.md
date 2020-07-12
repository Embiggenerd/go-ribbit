# go-ribbit

A containerized, micro services user authenrication. Just a learning experiment, not presented as a full fledged app. To use, clone the repo, and run docker-compose -f docker-compose-prod.yml up. Uses port 80.

## In Detail
* React with React router, redux, and react-native are used for front end
* A user can register, log in 
* A learning exercise that uses node for a gateway to talk to go services
* Nginx serves static files in production, webpack dev server in development
* Docker compose is used to extensively

## Demonstrates
* React, redux, react-router, react-native.
* The role of gateways in micro services.
* The importance of using a performant language for services.
* How to test micro services.
* Difference between production and dev docker files.
* Serving static files with nginx reverse proxy.
* CI/CD with Jenkins with minimal third party plugins by leveraging bash scripts.
* Using node as a gateway with services written in go.
