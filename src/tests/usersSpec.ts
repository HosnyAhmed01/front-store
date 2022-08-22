import Usersmodel from '../models/users.model';

const usermodel = new Usersmodel; 


describe("### users model " , ()=> {
    it("should be defiend " , async()=> {
        const data  = await usermodel.index();
        expect(data).toBeDefined; 
    })
    it("should be defiend" , async() => {
        const data = await usermodel.create({"first_name" : "hosny" , "last_name" : "ahmed" , "password" : "123"});
        expect(data).toBeDefined; 
    });
});