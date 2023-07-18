const fs=require("fs");

const readableStreams=fs.createReadStream(__filename);
readableStreams.close();

readableStreams.on("close",()=>{
    console.log("This is a readableStreams close event callback");
});


setTimeout(()=>{
    console.log("TimeOut 3");
},0);


setImmediate(()=>{
    console.log("Imimediately");
});

process.nextTick(()=>{
    console.log("This is nextTick queue");
});

Promise.resolve().then(()=>{
    console.log("This is Promise queue");
});