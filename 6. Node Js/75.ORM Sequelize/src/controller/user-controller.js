const userService =require("../services");
async function createUser(req,res){
    try{
        const newUser =await userService.createUser({
            name:req.body.name,
            age:read.body.age
        })
        return res.status(200).json({
            data:newUser,
            msg:"Successfully user created"
        })
    }
    catch(err){
        res.status(411).json({
            
            msg:"Something went wrong"
        })
    }
}
module.exports=createUser;