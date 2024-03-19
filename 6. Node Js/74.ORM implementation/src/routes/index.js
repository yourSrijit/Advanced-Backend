let express=require("express")
let router=express.Router();
const v1Routes=require("./V1");

router.use('/v1',v1Routes)


module.exports=router;