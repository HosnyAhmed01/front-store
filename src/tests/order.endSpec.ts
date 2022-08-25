import supertest from 'supertest';
import app from '../server'; 

let token = null; 
const request = supertest(app);


describe("should test the endpoint of orders" , ()=> {
    beforeAll( async () => {
        const user = await request
        .post('/auth/register')
        .send({first_name : "hosny" , last_name : "sawaby" , password : "pass1234"});
        
        const res = await request.get('/auth/login')
        .send({id : 1 , password : "pass1234"})
        token =  res.body.data.token;
    }); 
    it("create order return status of 200 user auth" , async() => {  
      const response = await request.post('/orders/create')
      .set('Authorization', 'Bearer '  + token)
      .send({status : "complete" , id : 1})
      expect(response.status).toBe(200);
    });  
    it("create order return status of 401 user  not auth" , async() => {  
      const response = await request.post('/orders/create')
      .send({status : "open" , id : 1})
      expect(response.status).toBe(401);
    });  
    it("current orders should return status of 401" , async() => {  
      const response = await request.get('/orders/current/1')
      .set('Authorization', 'Bearer '  + token)
        expect(response.status).toBe(200);
    });  
    it("completed orders should return status of 200" , async() => {  
      const response = await request.get('/orders/complete/1')
      .set('Authorization', 'Bearer '  + token)
        expect(response.status).toBe(200);
    });  
    it("update order should return status of 200" , async() => {  
      const response = await request.put('/orders/update')
      .set('Authorization', 'Bearer '  + token)
      .send({id : 1 , status : "open"});
        expect(response.status).toBe(200);
    });  
    it("remove orders should return status of 200" , async() => {  
      const response = await request.delete('/orders/remove')
      .set('Authorization', 'Bearer '  + token)
      .send({id : 1});
        expect(response.status).toBe(200);
    });  
}); 


