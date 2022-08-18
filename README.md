## how to start connection to database

1. .env
   ENV=dev
   port=3000
   DB_NAME=store_db
   DB_NAME_TEST=store_db_test
   DB_PORT=5000
   DB_HOST=localhost
   DB_PASSWORD=pass1234
   DB_USER=hosny
   PAPER=topsecrete 
   ROUND=10
   SECRET=topsecrete
2. **create user**
    ``sh
    CREATE USER hosny WITH PASSWORD 'pass1234';  
    ``
3. **create databases**
   ``sh 
   CREATE DATABASE store_db;
   CREATE DATABASE store_db_test;
   ``
4. GRANT privileges to database
   ``sh
   GRANT ALL PRIVILEGES ON DATABASE store_db TO hosny;
   GRANT ALL PRIVILEGES ON DATABASE store_db_test TO hosny;
   ``

## RIGHT STEPS TO USES THIS APP 
1. VISIT http://localhost:3000/auth/register with correct data in the req.body 
2. VISIT http://localhost:3000/auth/register with correct data in the req.body
3. TAKE THE USER TOKEN AND PUT IT IN THE AUTH
4. use this token to visit any api endpoint 


