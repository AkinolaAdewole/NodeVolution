Promise.resolve().then(()=>{
    console.log("This is Promise queue");
});

process.nextTick(()=>{
    console.log("This is nextTick");
});



Promise.resolve().then(()=>{
    console.log("This is Promise queue 2");

    Promise.resolve().then(()=>{
        console.log("Inner Promise queue inside promise");
    });
});


process.nextTick(()=>{
    console.log("This is nextTick 2");

    process.nextTick(()=>{
        console.log("Inner nextTick queue inside nextTick queue");
    });
});



setTimeout(()=>{
    console.log("TimeOut 1");
},0);

setTimeout(()=>{
    console.log("TimeOut 2");
    
process.nextTick(()=>{
    console.log("This is nextTick inside Timmer Queue");
});
},0);

setTimeout(()=>{
    console.log("TimeOut 3");
},0);