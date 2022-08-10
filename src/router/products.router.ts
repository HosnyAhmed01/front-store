import { Router } from "express";
import { indexController , showController , createController } from "../controllers/products.controller";
import { authGuard } from "../middlewares/auth.middle";
const productsRouter = Router(); 


productsRouter.get('/index' , indexController);
productsRouter.get('/show' , showController);
productsRouter.post('/create' , authGuard  , createController);

export default productsRouter;