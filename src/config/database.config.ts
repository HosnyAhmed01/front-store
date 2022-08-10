import dotenv from 'dotenv'; 
dotenv.config(); 

const {
    ENV,
    DB_NAME,
    DB_PORT,
    DB_HOST,
    DB_PASSWORD,
    DB_USER,
} = process.env; 


export default {
    env : ENV, 
    port : Number(DB_PORT), 
    name : DB_NAME, 
    password : DB_PASSWORD, 
    user : DB_USER, 
    host: DB_HOST, 
}