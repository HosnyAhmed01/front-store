import { Router } from "express";
import { currentOrderController , completedOrderController} from '../controllers/orders.controller';
import { authGuard } from "../middlewares/auth.middle";
const ordersRouter = Router(); 

ordersRouter.get('/current' , authGuard ,currentOrderController);
ordersRouter.get('/complete' , authGuard, completedOrderController);

export default ordersRouter;


