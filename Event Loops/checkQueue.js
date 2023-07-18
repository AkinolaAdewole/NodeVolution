const fs = require("fs");



setTimeout(()=>{
    console.log("TimeOut 1");
},0);


        setTimeout(()=>{
            console.log("TimeOut 2");
            
                                
            process.nextTick(()=>{
                console.log("This is nextTick queue inside setTimeOut 2");
            });

            Promise.resolve().then(()=>{
                console.log("This is Promise queue inside setTimeOut 2");
            });
        },0);



        // fs.fileContent=fs.readFile(__filename,()=>{
        //     console.log("This is readFile 1");

        //                 setImmediate(()=>{
        //                     console.log("setImmediate inside readFile 1");
        //                 })

                        
        //                 process.nextTick(()=>{
        //                     console.log("This is nextTick queue inside readFile 1");
        //                 });

        //                 Promise.resolve().then(()=>{
        //                     console.log("This is Promise queue inside readFile 1");
        //                 });

        // });


// process.nextTick(()=>{
//     console.log("This is nextTick queue");
// });

// Promise.resolve().then(()=>{
//     console.log("This is Promise queue");
// });


//Check Queue
setImmediate(()=>{
    console.log("setImmediate Queue ");
    process.nextTick(()=>{
        console.log("This is nextTick queue inside setTimeOut ");
    });

    Promise.resolve().then(()=>{
        console.log("This is Promise queue inside setImmediate ");
    });
})