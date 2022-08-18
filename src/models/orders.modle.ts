import { isAwaitExpression } from 'typescript';
import client from '../database'; 
import orders from '../interfaces/orders.interface';
import order_product from '../interfaces/order_product.interface';
class ordersModel {
    async createOrder(status : string= 'open' , user_id : number) : Promise<orders> {
        try {
            const conn = await client.connect(); 
            const sql = `INSERT INTO orders (status , user_id) VALUES ($1 , $2) RETURNING *`;
            const result = await conn.query(sql, [status , user_id]);
            conn.release(); 
            return result.rows[0];
        } catch (err) {
            throw new Error(`Couldn't create order please try again`);
        }

    }
    
    async updateOrder(stauts : string , id:number) : Promise<orders> {
        try {
            const conn = await client.connect(); 
            const sql = `UPDATAE orders SET status=$1 WHERE id=$2 RETURNING *`;
            const result = await conn.query(sql , [stauts , id]);
            conn.release();
            return result.rows[0];
        } catch  {
            throw new Error(`could't update order`); 
        }
    }
    async removeOrder(id: number) : Promise<orders> {
        try {
            const conn = await client.connect(); 
            const sql = `DELETE FROM order_products WHERE order_id =$1`;
            const sql2= `DELETE FROM orders WHERE id=$1`;
            const result = await conn.query(sql , [id]); 
            const result2 = await conn.query(sql2 , [id]); 
            return  result.rows[0]; 
        } catch {
            throw new Error(`could't remove order`);
        }
    }
    async currentOrder(user_id : number) : Promise<orders[]> {
        // connect to databaes 
        const conn = await client.connect(); 
        // write query 
        const sql = `SELECT * FROM orders WHERE user_id = $1`;
        // run query 
        const result = await conn.query(sql , [user_id]);
        // release connection 
        conn.release();
        return result.rows;
    }

    async completedOrder(user_id : number) : Promise<orders[]> {
        // connect to databaes 
        const conn = await client.connect(); 
        // write query 
        const sql = `SELECT * FROM orders WHERE user_id = $1 AND stauts='complete'`;
        // run query 
        const result = await conn.query(sql , [user_id]);
        // release connection 
        conn.release(); 
        return result.rows;
    }
    async addProduct(quantity : number , order_id : number , product_id : number) : Promise<order_product>{
        try {
            const conn = await client.connect(); 
            const sql = `INSERT INTO order_products (quantity , order_id , product_id) VALUES ($1 , $2 , $3) RETURNING *`;
            const result = await conn.query(sql , [quantity , order_id , product_id]);
            conn.release();
            return result.rows[0];
        } catch (err) {
            throw new Error(`can not add product to your order`);
        }
    }

}; 

export default ordersModel; 