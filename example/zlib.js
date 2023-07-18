const zlib = require('node:zlib');
const fs =require("node:fs");


const gzip= zlib.createGzip()
// This method accept file path as the first argument and option object as the second argument
const readableStreams=fs.createReadStream('./Notes/Test.txt',{
    encoding:"utf-8",
    // highWaterMark:4,
});

readableStreams.pipe(gzip).pipe(fs.WriteStream("./Notes/Test2.txt.gz")); 

const writeableStreams=fs.createWriteStream('./Notes/Test2.txt');
readableStreams.pipe(writeableStreams); 
