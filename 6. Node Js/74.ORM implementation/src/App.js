const express=require('express');
let app=express();
const {PORT} =require('./config')
const apiRoutes=require('./routes');


app.use('/api',apiRoutes)   // api/v1/info


app.listen(PORT,()=>{
    console.log('Succesfully started the server on port 4000');
})