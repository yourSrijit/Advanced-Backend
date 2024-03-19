const info=(req,res)=>{
    return res.json({
        success:true,
        message:"API IS LIVE NOW",
        error:{},
        data:{}
    })
}

module.exports={
    info
}