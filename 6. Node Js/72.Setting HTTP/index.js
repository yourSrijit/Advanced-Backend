const http=require("http");
const PORT=3000;
const server=http.createServer((req,res)=>{
if(req.url=='/home'){
    res.end('Welcome to Home')
}

})

server.listen(PORT,()=>{
    console.log('Successfully Connect in port no 3000');
})