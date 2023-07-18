const fs = require("fs");

setTimeout(()=>{
    console.log("TimeOut 1");
},0);

fs.fileContent=fs.readFile(__filename,()=>{
    console.log("This is readFile 1");
});

process.nextTick(()=>{
    console.log("This is nextTick queue");
});

Promise.resolve().then(()=>{
    console.log("This is Promise queue");
});