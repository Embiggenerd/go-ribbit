# go-ribbit
An experiment using nginx to serve static files, node as gateway api and go for services. Only a use flow was created

## Visit App

Clone the repo, run the stage_reup.sh script. Give it 5 minutes, there are lots of containers. Go to port 80. Register, you
will see 'timeline' - this is the only thing behind the authorization wall.

## In Detail

### Serving Static Files
* Nginx is used in production, webpack dev sever in development

### Devops
* Jenkins declarative pipeline is used for CI/CD
* e2e tests are done with Cypress.io
* Different docker-compose and docker files are using for dev and stage/production

## Front end
* Long response latency forced to use loader many times
* React/redux adds complexity

# Retrospective
* Overcomplicated design made development difficult
* Having node between frontend and services slowed things down
* Many problems with docker and user permissions
* Jenkins works but barely
* Docker compose is a life saver
* Typescript on front end and gateway would have helped
