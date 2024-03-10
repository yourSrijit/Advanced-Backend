# Advanced-Backend
Advanced Backend course of Sankeet Sing 2024

# Advanced Java Script

---

### 34. Async Proogramming with JS

- JS is sync in nature ( it check line by line)
- JS is single threaded
```
function byLoop(){
    console.log('Loop start');
    for(let i=0;i<1000000;i++){

    }
    console.log('Loop end');
}
function bySetTimeout(){
    console.log('SetTimeOut start');
    setTimeout(()=>{
        console.log('Complete the setTimeOut');
    },6000)
}

console.log('Hi srijit');
byLoop();
bySetTimeout();
byLoop();
```

