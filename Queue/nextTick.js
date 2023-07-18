console.log(1);
process.nextTick(()=>{
    console.log("This is nextTick queue");
});
console.log(2);