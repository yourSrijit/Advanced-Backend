# Create our own Server
---
### WIthout any 3rd party module
Using the createServer we can avtually create a basic http server using http module.
This function returns a serveer object,and taked a callback as a argument.
This function create the server but do't start
req-> abel to details of incoming http request.
res-> config what rsponse we need to send.
This callback is a kind of listner function that is going to collect every http request that we will
make to our server

```
const http=require("http");
const PORT=3000;

const server=http.createServer((req,res)=>{
      //Todo

});

server.listen(PORT,()=>{
    console.log('Successfully Connect in port no 3000');
})
```

### 127.0.0.1:port aks localhost:port
The IP address 127.0. 0.1 is a special-purpose IPv4 address and is called the localhost or loopback address

### WIth Express module
```let express=require("express");
const port=3000;

const app=express();

app.get("/",(req,res)=>{
    res.send("Hi there");
});

app.listen(port,()=>{
    console.log('Server is rumming on 3000');
})

```