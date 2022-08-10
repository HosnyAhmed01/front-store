import { Request , Response } from "express";
import { registerService } from '../services/auth.service';
import { loginService } from '../services/auth.service';
import Usersmodel from "../models/users.model";

const usersTable = new Usersmodel; 


export const registerController = async(req : Request ,res : Response) : Promise<void> => {
    try {
        const { first_name , last_name, password } = req.body;
        const data = await registerService({ first_name , last_name, password });
        res.json({
            messege: "user create",
            data : data
        })
    } catch (err) {
        throw new Error(`can not create user`);
    }
}

export const loginController = async (req : Request , res : Response) : Promise<void> =>{
    try {
        const data = await loginService(req.body); 
        res.json({
            messege : "loged in" , 
            data : data
        });
    } catch (err) {
        throw new Error(`can not login please try again `);
    }
}
export const showAll = async(_req : Request , res : Response) : Promise<void> => {
    try {
        const data = await usersTable.index(); 
        res.json({
            messege: 'hello' , 
            data : data
        })
    } catch (err){
        throw new Error(`can not show this info`);
    }

}