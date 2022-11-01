#!/usr/bin/env bash

echo "
----------------------
  NODE & NPM
----------------------
"
### OLD
### add nodejs 10 ppa (personal package archive) from nodesource
### curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -

### install nodejs and npm
### sudo apt-get install -y nodejs


### UPDATE 2022/11/01 ###

# nodejs and npm
sudo apt update
sudo apt install nodejs npm
nodejs --version
# v12.22.9


echo "
----------------------
  MONGODB
----------------------
"

### OLD
### import mongodb 4.0 public gpg key
### sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 9DA31620334BD75D9DCB49F368818C72E52529D4

### create the /etc/apt/sources.list.d/mongodb-org-4.0.list file for mongodb
### echo "deb [ arch=amd64 ] https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/4.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.0.list

### reload local package database
### sudo apt-get update

### install the latest version of mongodb
### sudo apt-get install -y mongodb-org

### start mongodb
### sudo systemctl start mongod

### set mongodb to start automatically on system startup
### sudo systemctl enable mongod


### UPDATE 2022/11/01 ###

# mongodb
sudo systemctl stop mongod.service
sudo systemctl disable mongod.service
sudo apt remove --autoremove mongodb-org

sudo rm /etc/apt/sources.list.d/mongodb*.list
sudo apt update

sudo curl -fsSL https://pgp.mongodb.com/server-6.0.asc | sudo gpg --dearmor -o /usr/share/keyrings/mongodb60.gpg

echo "deb [arch=amd64 signed-by=/usr/share/keyrings/mongodb60.gpg] http://repo.mongodb.org/apt/ubuntu focal/mongodb-org/6.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org.list

sudo wget http://archive.ubuntu.com/ubuntu/pool/main/o/openssl/libssl1.1_1.1.1f-1ubuntu2_amd64.deb
sudo dpkg -i libssl1.1_1.1.1f-1ubuntu2_amd64.deb

sudo apt update
sudo apt install mongodb-org

sudo systemctl enable mongod.service
sudo systemctl start mongod.service

mongod --version
# db version v6.0.2
# Build Info: {
#     "version": "6.0.2",
#     "gitVersion": "94fb7dfc8b974f1f5343e7ea394d0d9deedba50e",
#     "openSSLVersion": "OpenSSL 1.1.1f  31 Mar 2020",
#     "modules": [],
#     "allocator": "tcmalloc",
#     "environment": {
#         "distmod": "ubuntu2004",
#         "distarch": "x86_64",
#         "target_arch": "x86_64"
#     }
# }


echo "
----------------------
  PM2
----------------------
"

# install pm2 with npm
sudo npm install -g pm2

# set pm2 to start automatically on system startup
sudo pm2 startup systemd

# check successfull installation
pm2 ls


echo "
----------------------
  NGINX
----------------------
"

# install nginx
sudo apt-get install -y nginx

# check succesfull installation
nginx -v


echo "
----------------------
  UFW (FIREWALL)
----------------------
"

# allow ssh connections through firewall
sudo ufw allow OpenSSH

# allow http & https through firewall
sudo ufw allow 'Nginx Full'

# enable firewall
sudo ufw --force enable
