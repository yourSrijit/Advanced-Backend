const CrudRepo =require("./crud-repo");
let {userTable} =require("../models/usertable");


class userRepo extends CrudRepo{
    constructor(){
        super(userTable);
    }
}

module.exports=userRepo;