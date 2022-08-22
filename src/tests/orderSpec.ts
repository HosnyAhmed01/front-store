import OrderModel from '../models/orders.modle';
import UserModel from '../models/users.model';

const orderModel = new OrderModel; 
const usermodel = new UserModel; 


describe("### users model " , ()=> {
    it("should be defiend " , async()=> {
        const user =  await usermodel.create({id : 1 , first_name : "bla" , last_name : "bla" , password : "pass123"}); 
        const data  = await orderModel.createOrder( 'open', user.id as number);
        expect(data).toBeTrue; 
    })
});