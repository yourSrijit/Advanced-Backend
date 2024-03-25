const { ErrorResponse }=require("../utils/common");
function validateCreateRequest(req,res,next){
    if(!req.body.modelNumber){
        ErrorResponse.message ="Something went wrong while creating airplane";
        ErrorResponse.error={explanation:"Model number not found in the incoming"};

        return res.status(411).json(ErrorResponse)
    }
    next();
}

module.exports={ validateCreateRequest }