const express=require('express');
let app=express();
const {ServerConfig} =require('./config')
const apiRoutes=require('./routes');


app.use('/api',apiRoutes)   // api/v1/info


app.listen(ServerConfig.PORT,()=>{
    console.log('Succesfully started the server on port 4000');
})