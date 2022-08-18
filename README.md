## how to start connection to database

1. **.env**
   1. ENV=dev
   2. port=3000
   3. DB_NAME=store_db
   4. DB_NAME_TEST=store_db_test
   5. DB_PORT=5000
   6. DB_HOST=localhost
   7. DB_PASSWORD=pass1234
   8. DB_USER=hosny
   9. PAPER=topsecrete 
   10. ROUND=10
   11. SECRET=topsecrete
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


