import { Request , Response } from "express";
import OrdersModel from "../models/orders.modle";

const ordersModel = new OrdersModel; 

export const createOrderController = async (req : Request , res : Response) : Promise<void> => {
    try {
        const orderStatus= req.body.status; 
        const user_id = req.body.user_id; 
        const data = await ordersModel.createOrder(orderStatus , user_id);
        res.json({
            data : data
        });
    } catch (err) {
        throw new Error(`sorry can not created order`);
    }
}

export const updateOrderController = async (req : Request , res : Response) : Promise<void> => {
    try {
        const orderStatus= req.body.status; 
        const id = req.body.id; 
        const data = await ordersModel.updateOrder(orderStatus , id);
        res.json({
            data : data
        });
    } catch (err) {
        throw new Error(`sorry can not update order`);
    }
}
export const removeOrderController = async (req : Request , res : Response) : Promise<void> => {
    try {
        const id = req.body.id; 
        const data = await ordersModel.removeOrder(id);
        res.json({
            data : data
        });
    } catch (err) {
        throw new Error(`sorry can not created order`);
    }
}

export const currentOrderController = async (req : Request , res : Response) : Promise<void> => {
    try {
        const { user_id } = req.params;
        const data = await ordersModel.currentOrder(Number(user_id));
        res.json({
            data : data
        });
    } catch (err) {
        throw new Error(`sorry can not get current order`);
    }
}
export const completedOrderController = async (req : Request , res : Response) : Promise<void> => {
   try {
    const {user_id} = req.params;
    const data = await ordersModel.completedOrder(Number(user_id));
    res.json({
        data : data
    });
   }catch (err) {
    throw new Error(`sorry can not get current order`);
    }
}

export const addProductController = async (req : Request , res : Response) : Promise<void> => {
    try {
        const quantity = req.body.quantity; 
        const { id } = req.params;
        const product_id = req.body.product_id;
        const OrderedProducts = await ordersModel.addProduct(Number(quantity) , Number(id) , Number(product_id))
        res.json({
            messege : 'succes' , 
            data : OrderedProducts
        });
    }catch (err) {
        throw new Error('can not add porduct');
    }

}
