const http = require("http");
const fs= require('fs');

const server=http.createServer((req,res)=>{

    const name="Akinola";

    res.writeHead(200,{"Content-Type":"text/html"});
    let html=fs.readFileSync("./http/index.html","utf-8");
    html=html.replace("{{name}}", name);
    res.end(html);
})

server.listen(3000,()=>{
    console.log('server running on 3000');
})