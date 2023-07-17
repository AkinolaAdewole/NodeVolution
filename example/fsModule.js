const fs=require("node:fs");

const fileContent=fs.readFileSync("./Notes/FsModule.txt","utf-8");
console.log(fileContent);