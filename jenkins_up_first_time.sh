#!/bin/bash
#  This script should be executed the first time you use jenkins
docker volume create jenkins-goribbit-data
docker volume create npm-goribbit-cache
docker volume create cypress-goribbit-cache

docker run \
  -u root \
  -d \
  --name blue-ocean-goribbit \
  -p 8080:8080 \
  -v jenkins-goribbit-data:/var/jenkins_home \
  -v npm-goribbit-cache:/root/.npm \
  -v cypress-goribbit-cache:/root/.cache \
  -v /var/run/docker.sock:/var/run/docker.sock \
  -v /home/code123/go-ribbit/.ssh:/home/.ssh \
  -v /home/code123/go-ribbit/.ssh/ssh_config:/etc/ssh/ssh_config \
  jenkinsci/blueocean:latest

#  If you start for the very first time, inspect the logs from the running container
#  to see Administrator password: 'docker logs blue-ocean-goribbit'
