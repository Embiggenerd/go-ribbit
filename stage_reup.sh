#!/bin/bash


# stop current prod process
docker-compose --file ~/go-ribbit/docker-compose-prod.yml down --volumes

# update source
git checkout stage
git pull origin stage

# start updated app
docker-compose --file ~/go-ribbit/docker-compose-prod.yml up -V -d --build
