##  Mac OS X

1. Install with Homebrew (make your life easier)  
   ``` brew update && brew install mongodb ```
2. Create the default data directory for MongoDB and open up permissions:    
  ``` sudo mkdir -p /data/db && sudo chmod 777 /data/db ```
3. Start MongoDB:  
  ``` mongod ```
4. Leave this command prompt window open to keep MongoDB running. Use ctrl + C to exit.

MongoDB is now ready to go, use the link below to read the
[MongoDB install documentation](http://docs.mongodb.org/manual/tutorial/install-mongodb-on-os-x/) 
for advanced information like changing the data directory.