const {AirplaneRepo} =require("../repositories");
const airplaneRepo=new AirplaneRepo();

async function createAirplane(data){
    try{
        const airplane=await airplaneRepo.create(data);
        return airplane;
    }
    catch(err){
        throw err;
    }
}

module.exports={
    createAirplane
}