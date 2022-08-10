import client from '../database';
import products from '../interfaces/products.interface';

class ProductsModel {
    async index() : Promise<products[]> {
        // connect  to database
        const conn = await client.connect(); 
        // write sql query 
        const sql = `SELECT * FROM products`;
        // run query
        const result = await conn.query(sql);
        // release connection 
        conn.release(); 
        return result.rows;
    }

    async show(p : { name : string }) : Promise<products> {
        // connect  to database
        const conn = await client.connect(); 
        // write sql query 
        const sql = `SELECT * FROM products WHERE name = $1`;
        // run query
        const result = await conn.query(sql , [p.name]);
        // release connection 
        conn.release(); 
        return result.rows[0];
    }

    
    async create(p : products) : Promise<products> {
        // connect  to database
        const conn = await client.connect(); 
        // write sql query 
        const sql = `INSERT INTO products (name , price , category) VALUES ($1 , $2 , $3) RETURNING *`;
        // run query
        const result = await conn.query(sql , [p.name , p.price , p.category]);
        // release connection 
        conn.release(); 
        return result.rows[0];
    }
};

export default ProductsModel;