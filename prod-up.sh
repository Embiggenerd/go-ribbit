#!/bin/sh


docker-compose --file docker-compose-prod.yml up --build -d
# docker-compose -f docker-compose.yml -f docker-compose.locations.yml up --build -d
until [ "`/usr/bin/docker inspect -f {{.State.Health.Status}} database-main-prod`"=="healthy" ]; do
    sleep 0.1;
done;
docker-compose run users-service npx knex migrate:latest --env development --knexfile knexfile.js
docker-compose run users-service npx knex seed:run --env development --knexfile knexfile.js
until [ "`/usr/bin/docker inspect -f {{.State.Health.Status}} locations-db`"=="healthy" ]; do
    sleep 0.1;
done;
docker-compose run locations-service npx knex migrate:latest --env development --knexfile knexfile.js
docker-compose run locations-service npx knex seed:run --env development --knexfile knexfile.js
docker-compose logs -f --tail=all

