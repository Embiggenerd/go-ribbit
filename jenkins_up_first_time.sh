#!/bin/bash
#  This script should be executed the first time you use jenkins

# docker run \
#   -d \
#   --name blue-ocean-goribbit \
#   -p 8080:8080 \
#   -v jenkins-goribbit-data:/var/jenkins_home \
#   -v npm-goribbit-cache:/root/.npm \
#   -v cypress-goribbit-cache:/root/.cache \
#   -v /var/run/docker.sock:/var/run/docker.sock \
#   -v /home/code123/go-ribbit/.ssh:/home/.ssh \
#   -v /home/code123/go-ribbit/.ssh/ssh_config:/etc/ssh/ssh_config \
#   jenkinsci/blueocean:latest

# # docker build -t blue-ocean-goribbit .

# #   If you start for the very first time, inspect the logs from the running container
# #   to see Administrator password: 'docker logs blue-ocean-goribbit'
# #   Note that you will enter as user root. Find out the host uid with "id -u", then
# #   ssh into the jenkins container with "docker exec -ti blue-ocean-goribbit bin/bash"
# #   Check the owner of /var/jenkins_home/.ssh*. You may need to change this with 
# #   "chown <host uid> -R /var/jenkins_home/.ssh"

# docker run \
#   -u root \
#   -d \
#   --name blue-ocean-goribbit \
#   -p 80:8080 \
#   -v jenkins-goribbit-data:/var/jenkins_home \
#   -v npm-goribbit-cache:/root/.npm \
#   -v cypress-goribbit-cache:/root/.cache \
#   -v /var/run/docker.sock:/var/run/docker.sock \
#   -v /home/jenkins/ssh/:/var/jenkins_home/.ssh \
#   jenkinsci/blueocean:latest

# # docker run --name my_jenkins-cont -p 80:8080 -p 50000:50000 -v /var/jenkins_home jenkins
docker build -t blue-ocean-image . && docker run \
  -d \
  --name jenkins_goribbit \
  -p 80:8080 \
  -v jenkins-goribbit-data:/var/jenkins_home \
  -v npm-goribbit-cache:/root/.npm \
  -v cypress-goribbit-cache:/root/.cache \
  -v /var/run/docker.sock:/var/run/docker.sock \
  -v /home/jenkins/ssh/:/var/jenkins_home/.ssh \
  blue-ocean-image


# docker build -t blue-ocean-image . && docker run -it -d -p 80:8080 --name blue-ocean-goribbit blue-ocean-image 

#  If you start for the very first time, inspect the logs from the running container
#  to see Administrator password: 'docker logs blue-ocean-goribbit'
