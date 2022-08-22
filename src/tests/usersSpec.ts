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
    it("should show user by name " , async() => {
       const data = await usermodel.showByName("hosny"); 
       expect(data).toBeDefined(); 
    })
    it("should show user by id " , async() => {
       const data = await usermodel.show({id : 1}); 
       expect(data).toBeDefined(); 
    })
    it("should delete user" , async()=> {
        const data = await usermodel.delete(1); 
        expect(data).toBeDefined(); 
    })
});