import OrderModel from '../models/orders.modle';
import UserModel from '../models/users.model';
import ProductModel from '../models/products.model';


const orderModel = new OrderModel; 
const usermodel = new UserModel; 
const productmodel = new ProductModel; 

describe("### orders model " , ()=> {
    it("should be defiend " , async()=> {
        const user = await usermodel.create({"first_name" : "hosny" , "last_name" : "ahmed" , "password" : "123"})
        const data  = await orderModel.createOrder( 'complete', user.id as number);
        expect(data).toBeDefined(); 
    });
    it("should get current orders" , async()=> {
       const data = await orderModel.currentOrder(1);
       expect(data).toBeDefined(); 
    });
    it("should get completed orders" , async()=> {
       const data = await orderModel.completedOrder(1);
       expect(data).toBeDefined(); 
    });
    it("should update order" , async()=> {
        const data = await orderModel.updateOrder('open' , 2); 
        expect(data).toBeDefined();
    });
    it("should add product to an order" , async() => {
        const product = await productmodel.create({name : "car" , price : 2000 , category : "cars"});
        const addProduct = await orderModel.addProduct(20 , 2, product.id as number); 
        expect(addProduct).toBeDefined(); 
    }); 
    it("should remove order" , async() => {
        const delteOrder = await orderModel.removeOrder(2); 
        expect(delteOrder).toBeDefined();
    });
});