##  Linux - Ubuntu Part 1

Ubuntu does include MongoDB in their repositories, but it's generally an older version. Use these instructions to install and up-to-date verison.

1. Add the public key for apt:  
   ``` sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 7F0CEB10 ```
2. Create a list file
  ``` echo "deb http://repo.mongodb.org/apt/ubuntu "$(lsb_release -sc)"/mongodb-org/3.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.0.list ```
