const crypto=require("crypto");

const MAX_CALLS= 4;

const start = Date.now();
// Sync Method
crypto.pbkdf2Sync("password","salt",10000,512,"sha512");
console.log("Hash: ", Date.now() - start);

for(let i=0; i<MAX_CALLS; i++){
    crypto.pbkdf2("password","salt",10000,512,"sha512", ()=>{
        console.log(`Hash:${i+1}`,Date.now()-start);
    });
}