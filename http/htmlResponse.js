const http = require("http");
const fs= require('fs');

const server=http.createServer((req,res)=>{

    const superHero={
        firstName:'Akinola',
        lastName:'Adewole'
    }

    res.writeHead(200,{"Content-Type":"text/html"});
    // const html=fs.readFileSync("./http/index.html","utf-8")
    // res.end(html);
    fs.createReadStream(__dirname+"/index.html").pipe(res);
})

server.listen(3000,()=>{
    console.log('server running on 3000');
})