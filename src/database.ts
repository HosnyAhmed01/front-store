import { Pool } from "pg";
import dbConfig from './config/database.config'; 


const client = new Pool({
    host: dbConfig.host, 
    database: dbConfig.env === 'test' ? dbConfig.test : dbConfig.name  , 
    user: dbConfig.user , 
    password: dbConfig.password, 
    port: dbConfig.port
});



export default client; 