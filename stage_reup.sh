#!/bin/bash

# make the working directory the location of the script
cd "$(dirname "$0")"

# stop current prod process
docker-compose --file ~/go-ribbit/docker-compose-prod.yml down --volumes

# update source
git checkout stage
git pull origin stage

# start updated app
docker-compose --file ~/go-ribbit/docker-compose-prod.yml up -V -d --build
