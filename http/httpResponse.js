const http = require("http");
const fs= require('fs');

const server=http.createServer((req,res)=>{
    // res.end(req.url)

    if(req.url==="/"){
        res.writeHead(200,{"Content-Type":"text/plain"});
        res.end("Home Page");
    }else if(req.url==="/About"){
        res.writeHead(200,{"Content-Type":"text/plain"});
        res.end("About Page");
    } else if(req.url==="/api"){
        res.writeHead(200,{"Content-Type":"application/json"});
        res.end(JSON.stringify({
            fistname:"Akinola",
            lastname:"Adewole"
        }))
    }else{
        res.writeHead(404);
        res.end("Page not found");
    }
})

server.listen(3000,()=>{
    console.log('server running on 3000');
})