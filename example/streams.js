const fs =require("node:fs");


// This method accept file path as the first argument and option object as the second argument
const readableStreams=fs.createReadStream('./Notes/Test.txt',{
    encoding:"utf-8"
});

const writeableStreams=fs.createWriteStream('./Notes/Test2.txt');

readableStreams.on('data',(chunk)=>{
    console.log(chunk);
    writeableStreams.write(chunk);
});