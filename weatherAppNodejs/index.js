//api=https://api.openweathermap.org/data/2.5/weather?q=pune&appid=1dd516ab946b0bcbe03ddfacb832d03f
//api key=1dd516ab946b0bcbe03ddfacb832d03f



const http=require("http");
const fs=require("fs");
var requests =require("requests");
const { json } = require("express");


const homeFile =fs.readFileSync("home.html","utf-8");


const replaceval =(tempval,origval)=>{
    let temperature =tempval.replace("{%tempval%}",origval.main.temp);
    temperature =temperature.replace("{%tempmin%}",origval.main.temp_min);
    temperature =temperature.replace("{%tempmax%}",origval.main.temp_max);
    temperature =temperature.replace("{%location%}",origval.name);
    temperature =temperature.replace("{%country%}",origval.sys.country);
    temperature =temperature.replace("{%tempstatus%}",origval.weather[0].main);

    return temperature
}
const server=http.createServer((req,res)=>{
    if(req.url=="/"){
        requests('https://api.openweathermap.org/data/2.5/weather?q=pune&appid=1dd516ab946b0bcbe03ddfacb832d03f'  )
.on('data',(chunk)=>{
    const objdata =JSON.parse(chunk);
    const arrData =[objdata];
//   console.log(arrData[0].main.temp);
    const realTimeData=arrData.map(val=>replaceval(homeFile,val)).join("");
    res.write(realTimeData);
    // console.log(realTimeData)
})
.on('end', function (err) {
  if (err) return console.log('connection closed due to errors', err);
    res.end();
});
    }

});

server.listen(8000,"127.0.0.1");