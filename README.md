# eladrProtocolBackend
This is a repo of eladr protocol backend
## Installation for Linux
You can run eladrProtocolBackend on a clean Linux machine or VM.

 * Install essential tools required by running:
 ```
 sudo apt install g++ build-essential git curl 
 ```
* Install IPFS by the following commands:
```
## ipfs version 0.16.0 
wget https://dist.ipfs.tech/kubo/v0.16.0/kubo_v0.16.0_linux-amd64.tar.gz
tar -xvzf kubo_v0.16.0_linux-amd64.tar.gz
cd kubo
sudo bash install.sh
ipfs init
cd ../
```

* Install Nodejs by the following commands:
```
## nodejs version 16.18.0
curl -sL https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.0/install.sh -o install_nvm.sh
``` 
```
# Restart the temainal when the command successfully executed.
```
```
 nvm install --lts
 node --version
```
* Install and Setup MySql by the following commands:
```
## My sql version 8 
sudo apt install mysql-server
sudo systemctl start mysql.service
sudo mysql
```
```
## Use can change the user and password
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
```
```
GRANT ALL PRIVILEGES ON *.* TO 'root'@'localhost' WITH GRANT OPTION;
```
```
CREATE DATABASE eladr;
```
```
exit
```



* Download and setup EladrProtocolBackend Server :

```
git clone https://github.com/yourforkedrepo.git
```
```
cd eladrProtocolBackend
npm install
```
```
touch .env
nano .env
```
```
### Your .env file must look like this:
PORT=8000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=password
DB_DATABASENAME=eladr
```
```
## To run the script run:
node app.js
```

```
## The server will start up on port you entered above and you will see the following on your screen :


db name: localhost
listen port 8000
Executing (default): SELECT 1+1 AS result
Executing (default): SELECT 1+1 AS result
Connection has been established successfully.
```
