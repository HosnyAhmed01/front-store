import client from '../database'; 
import users from '../interfaces/users.interface';

class Usersmodel {
   async index() : Promise<users[]> {
        // connect  to database
        const conn = await client.connect(); 
        // write sql query 
        const sql = `SELECT * FROM users`;
        // run query
        const result = await conn.query(sql);
        // release connection 
        conn.release(); 
        return result.rows;
   }

   async show(U : { id : number }) : Promise<users> {
    // connect  to database
    const conn = await client.connect(); 
    // write sql query 
    const sql = `SELECT * FROM users WHERE id = $1`;
    // run query
    const result = await conn.query(sql , [U.id]);
    // release connection 
    conn.release(); 
    return result.rows[0];
    }
    async showByName(name : string) : Promise<users> {
        // connect  to database
        const conn = await client.connect(); 
        // write sql query 
        const sql = `SELECT * FROM users WHERE first_name = $1`;
        // run query
        const result = await conn.query(sql , [name]);
        // release connection 
        conn.release(); 
        return result.rows[0];
        }
    
    async create(U : users) : Promise<users> {
        // connect  to database
        const conn = await client.connect(); 
        // write sql query 
        const sql = `INSERT INTO users (first_name , last_name , password) VALUES ($1 , $2 , $3) RETURNING *`;
        // run query
        const result = await conn.query(sql , [U.first_name , U.last_name , U.password]);
        // release connection 
        conn.release(); 
        return result.rows[0];
    }
    async delete(id : number) : Promise<users> {
        // connect  to database
        const conn = await client.connect(); 
        // write sql query 
        const sql = `DELETE FROM users WHERE id =$1 RETURNING *`;
        // run query
        const result = await conn.query(sql , [id]);
        // release connection 
        conn.release(); 
        return result.rows[0];
    }
}
export default Usersmodel;