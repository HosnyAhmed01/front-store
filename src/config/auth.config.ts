import dotenv from 'dotenv';
dotenv.config(); 

const {
    ROUND,
    PAPER, 
    SECRET 
} = process.env;

export default {round : Number(ROUND) , paper : PAPER , jwtSecret : SECRET as string}