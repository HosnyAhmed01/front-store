import supertest from 'supertest';
import app from '../server'; 

let token = null; 
const request = supertest(app);

describe("should test the endpoint of orders" , ()=> {
    beforeAll( async () => {
        const res = await request.get('/auth/login')
        .send({id : 1 , password : "pass1234"})
        token =  res.body.data.token;
    }); 
    it("create product should return status 200" , async() => {
        const response = await request.post('/products/create')
        .set('Authorization', 'Bearer '  + token)
        .send({"name" : "car" , "price" : 2000 , "category": "cars"});
          expect(response.status).toBe(200);
    })
    it("create product should return status 401" , async() => {
        const response = await request.post('/products/create')
        .send({"name" : "car" , "price" : 2000 , "category": "cars"});
          expect(response.status).toBe(401);
    })
    it("show product should return status 200" , async() => {
        const response = await request.get('/products/index')
        .set('Authorization', 'Bearer '  + token)
          expect(response.status).toBe(200);
    })
    it("show product should return status 200" , async() => {
        const response = await request.get('/products/show')
        .set('Authorization', 'Bearer '  + token)
        .send({name : "car"});
          expect(response.status).toBe(200);
    })
    it("should add porduct to an order" , async () => {
        const response = await request.post('/orders/create')
        .set('Authorization', 'Bearer '  + token)
        .send({status : "complete" , user_id : 1}); 

        const res = await request.post('/orders/order/3/products')
        .set('Authorization', 'Bearer '  + token)
        .send({quantity : 10 , product_id : 1}); 
        expect(res.status).toBe(200);
    })
});


