import { Request , Response } from "express";
import OrdersModel from "../models/orders.modle";

const ordersModel = new OrdersModel; 

export const currentOrderController = async (req : Request , res : Response) : Promise<void> => {
    try {
        const data = await ordersModel.currentOrder({user_id : Number(req.query.user_id)});
        res.json({
            currentOrders : data
        });
    } catch (err) {
        throw new Error(`sorry can not get current order`);
    }
}
export const completedOrderController = async (req : Request , res : Response) : Promise<void> => {
   try {
    const data = await ordersModel.completedOrder({user_id : Number(req.query.user_id)});
    res.json({
        completedorders : data
    });
   }catch (err) {
    throw new Error(`sorry can not get current order`);
    }
}
