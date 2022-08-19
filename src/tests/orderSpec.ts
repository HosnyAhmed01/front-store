import ordersModel from '../models/orders.modle';
import Usersmodel from '../models/orders.modle';

const orderModel = new ordersModel; 


describe("### users model " , ()=> {
    it("should be defiend " , async()=> {
        const data  = await orderModel.createOrder()
        expect(data).toBeDefined; 
    })
    it("should return array of users" , async() => {
        const data = await orderModel.index(); 
        expect(data).toEqual([]);
    });
    it("should be defiend" , async() => {
        const data = await orderModel.create({"first_name" : "hosny" , "last_name" : "ahmed" , "password" : "123"});
        expect(data).toBeDefined; 
    });
});