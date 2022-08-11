import { Pool } from "pg";
import dbConfig from './config/database.config'; 

let client;

if (dbConfig.env === 'env') {
     client = new Pool({
        host: dbConfig.host, 
        database: dbConfig.test, 
        user: dbConfig.user , 
        password: dbConfig.password, 
        port: dbConfig.port
    });
}

if (dbConfig.env === 'test') {
    client = new Pool({
        host: dbConfig.host, 
        database: dbConfig.name, 
        user: dbConfig.user , 
        password: dbConfig.password, 
        port: dbConfig.port
    });
}




export default client; 