import { Router } from "express";
import client from "../database";
import authRouter from '../router/auth.router';
import productsRouter from "./products.router";
import ordersRouter from "./orders.router";
const router = Router(); 

router.use('/auth' , authRouter);
router.use('/products' , productsRouter);
router.use('/orders' , ordersRouter);


export default router; 