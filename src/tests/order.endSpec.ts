import supertest from 'supertest';
import { resolveTripleslashReference } from 'typescript';
import app from '../server'; 


const request = supertest(app);


describe("should test the endpoint of orders" , ()=> {
    beforeAll( async function auth() {
        await request
        .post('/auth/register')
        .send({first_name : "hosny" , last_name : "sawaby" , password : "pass1234"})  
        // get the token 
        const res = await request.get('auth/login')
        .send({id : 1 , password : "pass1234"})
        return res.body.data.token;
    }); 
    it("should return status of 200" , async() => {  
        const response = await request.get('/orders/current/1');
        expect(response.status).toBe(401);
      });  
}); 
