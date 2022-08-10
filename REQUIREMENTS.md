## correct RESTful routes for the required endpoints.

1. http://localhost:3000/orders/current?user_id=1 {required token} get request
2. http://localhost:3000/orders/complete?user_id=1 {required token} get request
3. http://localhost:3000/auth/login get request
4. http://localhost:3000/auth/register post request
5. http://localhost:3000/auth/index {required token} get request
6. http://localhost:3000/products/index get request
7. http://localhost:3000/products/show get request
8. http://localhost:3000/products/create { required token } post request

## database schema

1. Products table have four colums which is :
   1. id SERIAL PRIMARY KEY
   2. name VARCHAR(50) NOT NULL
   3. price real NOT NULL
   4. category VARCHAR(50) NOT NULL
2. users table have four colums which is
   1. id SERIAL PRIMARY KEY,
   2. first_name VARCHAR(50) NOT NULL
   3. last_name VARCHAR(50) NOT NULL
   4. password VARCHAR(100) NOT NULL
3. oders table have seven colums which is
   1. id SERIAL PRIMARY KEY
   2. product_id integer
   3. FOREIGN KEY(product_id) REFERENCES products(id) ON DELETE CASCADE
   4. quantity integer NOT NULL
   5. user_id integer
   6. FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE,
   7. status VARCHAR(20) NOT NULL
