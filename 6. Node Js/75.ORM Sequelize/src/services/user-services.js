const {userRepo}=require("../repositories")

const userrepo=new userRepo();
async function createUser(data){
    try{
        const user=await userrepo.create(data);
        return user;
    }
    catch(err){
        throw err;
    }

}

module.exports=createUser;