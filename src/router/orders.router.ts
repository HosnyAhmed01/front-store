import { Router } from "express";
import { 
    currentOrderController , 
    completedOrderController ,
    addProductController , 
    createOrderController,
    removeOrderController,
    updateOrderController} from '../controllers/orders.controller';
import { authGuard } from "../middlewares/auth.middle";
const ordersRouter = Router(); 

ordersRouter.get('/current/:user_id' , authGuard ,currentOrderController);
ordersRouter.get('/complete/:user_id' , authGuard, completedOrderController);
ordersRouter.post('/order/:id/products' , authGuard , addProductController);
ordersRouter.post('/create' , authGuard ,createOrderController)
ordersRouter.delete('/remove' ,authGuard, removeOrderController)
ordersRouter.put('/update' , authGuard , updateOrderController);

export default ordersRouter;

