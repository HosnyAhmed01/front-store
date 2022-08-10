import { Request , Response } from "express";
import ProductsModel from '../models/products.model';

const productsModel = new ProductsModel; 

export const indexController = async (_req : Request , res : Response) : Promise<void> => {
        try {
            const data = await productsModel.index(); 
            res.json({
                data : data
            }) 
        } catch (err) {
            throw new Error(`sorry can not show products  ${err}`);
        }
}

export const showController = async (req : Request , res : Response) : Promise<void> => {
    try {
      const data  = await productsModel.show(req.body);
      res.json({
        product : data
      });  
    } catch (err) {
        throw new Error(`can not show product  ${err}`);
    }
}

export const createController = async (req: Request , res : Response) : Promise<void> => {
    try {
        const data = await productsModel.create(req.body); 
        res.json({
            messege : `product created`, 
            data : data
        });
    } catch (err){
        throw new Error(`can not ctreat ${err}`);
    }
}