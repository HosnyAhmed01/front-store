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
    id SERIAL PRIMARY KEY,
    status VARCHAR(15) ,
    user_id bigint REFERENCES users(id)
);

CREATE TABLE order_products (
    id SERIAL PRIMARY KEY,
    quantity integer,
    order_id bigint REFERENCES orders(id),
    product_id bigint REFERENCES products(id)
);



/* Replace with your SQL commands */