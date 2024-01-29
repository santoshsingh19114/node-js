//streams are objects that let you read data from a source or write data to a destination in continuous fashion 
//four types 

//readable
//writable
//duplex
//transform

// each type of streams is an event emitter instance and throw several events atdifferent instance of times 
//data,end,error,finish ye sb khud me event h 


const fs=require("fs")
const http=require("http")

const server =http.createServer();
// server.on("request",(req,res)=>{

//normal way jisme sara data pehle load hota h fir show hota h 



    // fs.readFile("./input.txt",(err,data)=>{
    //     if(err) return console.error(err);
    //     res.end(data.toString());
    // });
// })











//2nd way jismay load hote ke sath sath show hote jayega

//create a readable stream
server.on("request",(req,res)=>{
    // const rstream =fs.createReadStream('inputs.txt');
    // rstream.on("data",(chunkdata)=>{
    //     res.write(chunkdata);
    // });
    // rstream.on('end',()=>{
    //     res.end();
    // })
    // rstream.on("error",(err)=>{
    //     res.end("file not find");
    // })











    // 3rd way   // best way 

    const rstream =fs.createReadStream("input.txt");
    rstream.pipe(res);
})
server.listen(8000,"127.0.0.1");


