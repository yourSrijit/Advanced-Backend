const info=(req,res)=>{
    return res.status(500).json({
        success:true,
        message:"API IS LIVE NOW",
        error:{},
        data:{}
    })
}

module.exports={
    info
}