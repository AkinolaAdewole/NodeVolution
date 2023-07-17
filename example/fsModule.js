// The fs (File System) module in Node.js is a built-in module that provides an interface for interacting with the file system. 
// It allows you to work with files, directories, and file-related operations such as reading, writing, updating, and deleting files. 


const fs=require("node:fs");

//Synchronous Method
const fileContent=fs.readFileSync("./Notes/FsModule.txt","utf-8");
console.log(fileContent);

//CallBack Method