## how to start connection to database

1. **.env**
``
Just copy the example.env file 
``
2. **create user**
    ``
    CREATE USER hosny WITH PASSWORD 'pass1234';  
    ``
3. **create databases**
   ``
   CREATE DATABASE store_db;
   CREATE DATABASE store_db_test;
   ``
4. GRANT privileges to database
   ``
   GRANT ALL PRIVILEGES ON DATABASE store_db TO hosny;
   GRANT ALL PRIVILEGES ON DATABASE store_db_test TO hosny;
   ``

## RIGHT STEPS TO USES THIS APP 
1. VISIT http://localhost:3000/auth/register with correct data in the req.body 
2. VISIT http://localhost:3000/auth/register with correct data in the req.body
3. TAKE THE USER TOKEN AND PUT IT IN THE AUTH
4. use this token to visit any api endpoint 


