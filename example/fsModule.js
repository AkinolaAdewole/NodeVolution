// The fs (File System) module in Node.js is a built-in module that provides an interface for interacting with the file system. 
// It allows you to work with files, directories, and file-related operations such as reading, writing, updating, and deleting files. 


const fs=require("node:fs");

//Synchronous Method
const fileContent=fs.readFileSync("./Notes/Test.txt","utf-8");
console.log(fileContent);

//CallBack Method
fs.readFile("./Notes/Test.txt","utf-8",(error, data)=>{
    if(error){
        console.log(error);
    }else{
        console.log(data);
    }
});

//To create and write a file
// Synchronous Method
fs.writeFileSync("./Notes/Test2.txt","Hello Adewole");

//Asynchronous Method
fs.writeFile('./Notes/Test2.txt',"  Adewole Stephen",{flag:"a"},(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("File Written");
    }
})


fs.writeFile('./Notes/Test3',"Adewole Stephen",(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("File Written");
    }
})