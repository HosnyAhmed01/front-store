## correct RESTful routes for the required endpoints.

1. http://localhost:3000/orders/current/1 {required token} get request
2. http://localhost:3000/orders/complete/1 {required token} get request
3. http://localhost:3000/orders/create {required token} post request 
4. http://localhost:3000/orders/remove {required token} delete request 
5. http://localhost:3000/orders/remove update {required token} PUT request 
6. http://localhost:3000/orders/1/products {required token} post request 
7. http://localhost:3000/auth/login get request
8. http://localhost:3000/auth/register post request
9. http://localhost:3000/auth/index {required token} get request
10. http://localhost:3000/products/index get request
11. http://localhost:3000/products/show get request
12. http://localhost:3000/products/create { required token } post request

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
3. oders table have three colums which is
    1. id SERIAL PRIMARY KEY,
    2. status VARCHAR(15) ,
    3. user_id bigint REFERENCES users(id)
4. order_products table have 4 columns 
    1. id SERIAL PRIMARY KEY,
    2. quantity integer,
    3. order_id bigint REFERENCES orders(id),
    4. product_id bigint REFERENCES products(id)
