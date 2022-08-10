import client from '../database'; 
import orders from '../interfaces/orders.interface';
class ordersModel {

    async currentOrder(p : {user_id : number}) : Promise<orders[]> {
        // connect to databaes 
        const conn = await client.connect(); 
        // write query 
        const sql = `SELECT * FROM orders WHERE user_id = $1`;
        // run query 
        const result = await conn.query(sql , [p.user_id]);
        // release connection 
        conn.release();
        return result.rows;
    }

    async completedOrder(p : {user_id : number}) : Promise<orders[]> {
        // connect to databaes 
        const conn = await client.connect(); 
        // write query 
        const sql = `SELECT * FROM orders WHERE user_id = $1 AND stauts='complete'`;
        // run query 
        const result = await conn.query(sql , [p.user_id]);
        // release connection 
        conn.release(); 
        return result.rows;
    }

}; 

export default ordersModel; 