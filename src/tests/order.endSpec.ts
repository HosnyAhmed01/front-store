import supertest from 'supertest';
import app from '../server'; 


const request = supertest(app);


describe("should test the endpoint of orders" , ()=> {
    it("should make a user" , async ()=> {
        const res = await request
        .post('/auth/register')
        .send({first_name : "hosny" , last_name : "sawaby" , password : "pass1234"})
        expect(res.body.data.id).toBe(1);
    }); 
    it("should return status of 200" , async() => {  
        const response = await request.get('/orders/current/1');
        expect(response.status).toBe(401);
      });  
}); 
