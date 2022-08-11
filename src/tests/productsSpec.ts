import ProductsModel from '../models/products.model';

const productmodel = new ProductsModel; 


describe("### users model " , ()=> {
    it("should be defiend " , async()=> {
        const data  = await productmodel.index();
        expect(data).toBeDefined; 
    })
    it("should return array of users" , async() => {
        const data = await productmodel.index(); 
        expect(data).toEqual([]);
    });
});