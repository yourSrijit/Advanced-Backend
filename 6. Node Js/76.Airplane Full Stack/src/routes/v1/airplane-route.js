let express=require("express")
let router=express.Router();
const {AirplaneController} =require("../../controllers");

router.post('/', AirplaneController.createAirplane);

module.exports=router;