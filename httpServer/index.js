
const http =require("http");
const fs=require("fs");
//to create a webserver weuse http.createServer() method includes request and responseparameters which is supplied by node.js .

const server =http.createServer((req,res)=>{

    data=fs.readFileSync(`${__dirname}/API/userapi.json`,"utf-8")
        const objdata=JSON.parse(data);





    // console.log(req.url);

    if(req.url =="/"){
        res.end("hello from the home side");
    }else if(req.url== "/about"){
        res.end("hello from the about us side");
    }else if(req.url== "/contact"){
        res.write("hello from the contact us side");
        res.end();
    }
    else if(req.url== "/userapi"){
        res.writeHead(200,{"content-type": "application/json"});
            
            res.end(objdata[2].name);
        
        
        
    }else{
        res.writeHead(404,{"content-type": "text/html"});
        res.end("<h1>404 error pages. page doesnot exist</h1>");
    }
    
});

server.listen(8000,"127.0.0.1" ,()=>{
    console.log("listening to port no 8000");
});