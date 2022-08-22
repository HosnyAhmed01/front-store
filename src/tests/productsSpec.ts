import ProductsModel from '../models/products.model';

const productmodel = new ProductsModel; 


describe("### products model " , ()=> {
    it("should be defiend " , async()=> {
        const data  = await productmodel.index();
        expect(data).toBeDefined; 
    })
    it("should be defiend" , async() => {
        const data = await productmodel.create({"name" : "car" , "price" : 2000 , "category": "cars"}); 
        expect(data).toBeDefined(); 
    });
    it("should return product" , async()=> {
        const data = await productmodel.show({name : "car"});
        expect(data).toBeDefined(); 
    });
});