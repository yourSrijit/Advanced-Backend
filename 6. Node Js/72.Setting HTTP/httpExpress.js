let express=require("express");
const port=3000;

const app=express();

app.get("/",(req,res)=>{
    res.send("Hi there");
});

app.listen(port,()=>{
    console.log('Server is rumming on 3000');
})