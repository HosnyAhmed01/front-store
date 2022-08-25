import supertest from 'supertest';
import app from '../server'; 

let token = null; 
const request = supertest(app);

describe("should test the endpoint of users" , ()=> {
    beforeAll( async () => {
        const res = await request.get('/auth/login')
        .send({id : 1 , password : "pass1234"})
        token =  res.body.data.token;
    }); 
    it("should test the register endpoint " , async () => {
        const res = await request.post('/auth/register').
        send({first_name : "mohamed" , last_name : "sawaby" , password : "pass1234"});
        expect(res.status).toBe(200);
    })
    it("should test the login endpoint " , async () => {
        const res = await request.get('/auth/login').
        send({id : 3, password : "pass1234"});
        expect(res.status).toBe(200);
    })
    it("should test the index endpoint " , async () => {
        const res = await request.get('/auth/index')
        .set('Authorization', 'Bearer '  + token);
        expect(res.status).toBe(200);
    })
})