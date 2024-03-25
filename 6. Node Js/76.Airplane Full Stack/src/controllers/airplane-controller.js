const { AirplaneService } =require("../services");

async function createAirplane(req,res){
   
    try{
        const airplane=await AirplaneService.createAirplane({
            modelNumber :req.body.modelNumber,
            capacity: req.body.capacity
        });
        
        return res.status(200).json({
            update:airplane,
            msg :"Successfuly Created"
        })

    }
    catch(err){
        return res.status(500).json({
            msg:"Something went wrong controller"
        })
    }
}

module.exports={
    createAirplane
}