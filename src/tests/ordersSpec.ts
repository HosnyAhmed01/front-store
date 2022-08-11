import OrdersModel from '../models/orders.modle';

const ordermodel = new OrdersModel; 


describe("### users model " , ()=> {
    it("should be defiend " , async()=> {
        const data  =  ordermodel.currentOrder();
        expect(data).toBeDefined; 
    })
    it("should return array of users" , async() => {
        const data = await productmodel.index(); 
        expect(data).toEqual([]);
    });
});