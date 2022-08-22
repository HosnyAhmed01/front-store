import { Router} from "express";
import { registerController , loginController , showAll } from '../controllers/auth.conteroller';
import { authGuard } from "../middlewares/auth.middle";



const authRouter = Router(); 


authRouter.post('/register' , registerController); 
authRouter.get('/login' , loginController)
authRouter.get('/index' , authGuard , showAll)
export default authRouter;