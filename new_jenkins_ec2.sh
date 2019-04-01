#!/bin/sh


sudo iptables -A PREROUTING -t nat -i eth0 -p tcp --dport 80 -j REDIRECT --to-port 8080
sudo iptables -t nat -I OUTPUT -p tcp -o lo --dport 80 -j REDIRECT --to-ports 8080

sudo yum update -y
sudo amazon-linux-extras install docker
sudo service docker start

sudo usermod -a -G docker ec2-user
sudo adduser jenkins
sudo usermod -a -G docker jenkins
sudo chkconfig docker on

sudo reboot

