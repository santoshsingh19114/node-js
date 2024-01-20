const EventEmitter =require("events")

const event =new EventEmitter();

// event.on('saymyname',()=>{
//     console.log("your name is santosh");
// });
// event.on('saymyname',()=>{
//     console.log("your name is rohit");
// });
// event.on('saymyname',()=>{
//     console.log("your name is shubh");
// });

// //event emit baad me krna hota h 
// event.emit("saymyname");


//ek event emitter se multiple function call kr skte h 

event.on("checkpage",(sc,msg)=>{
    console.log(   `status code is ${sc} and the page is ${msg}`);

});

event.emit("checkpage",200,"ok");
