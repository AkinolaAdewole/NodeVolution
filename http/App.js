const http = require("http");

const server=http.createServer((req,res)=>{

    const superHero={
        firstName:'Akinola',
        lastName:'Adewole'
    }

    res.writeHead(200,{"Content-Type":"text/plain"});
    res.end(superHero);
})

server.listen(3000,()=>{
    console.log('server running on 3000');
})