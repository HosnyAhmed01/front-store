CREATE TABLE products (
    id SERIAL PRIMARY KEY , 
    name VARCHAR(50) NOT NULL, 
    price real NOT NULL, 
    category VARCHAR(50) NOT NULL
); 

CREATE TABLE users(
    id SERIAL PRIMARY KEY, 
    first_name VARCHAR(50) NOT NULL, 
    last_name VARCHAR(50) NOT NULL,
    password VARCHAR(100) NOT NULL
);


CREATE TABLE orders(
    id SERIAL PRIMARY KEY , 
    product_id integer ,
    FOREIGN KEY(product_id) REFERENCES products(id) ON DELETE CASCADE, 
    quantity integer NOT NULL, 
    user_id integer , 
    FOREIGN KEY(user_id) REFERENCES users(id)  ON DELETE CASCADE, 
    status VARCHAR(20) NOT NULL
); 




/* Replace with your SQL commands */