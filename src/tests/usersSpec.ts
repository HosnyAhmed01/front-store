import Usersmodel from '../models/users.model';

const usermodel = new Usersmodel; 


describe("### users model " , ()=> {
    it("should be defiend " , async()=> {
        const data  = await usermodel.index();
        expect(data).toBeDefined; 
    })
    it("should return array of users" , async() => {
        const data = await usermodel.index(); 
        expect(data).toEqual([]);
    });
});