const express =require("express")

const app=express();

app.get("/about",(req,res)=>{
    res.send("<h1>welcome to my about page</h1>");
})
app.get("/contact",(req,res)=>{
    //res.write me multiple element ko add krwa skte h 

    res.send("<h1>welcome to my about page</h1>");
    res.send("<h1>welcome to my about page again</h1>");
    res.send();
})
app.get("/temp",(req,res)=>{
    //json data bhi bhej skte h 
    // res.send({
    //     id:1,
    //     name:"santosh",
    //     mess:"welcome to my temp page",
    // });



    //array of an object ke roop me bhi bhej skte h 
//     res.send([
//         {
//         id:1,
//         name:"santosh",
//         mess:"welcome to my temp page",
//     },
//         {
//         id:1,
//         name:"santosh",
//         mess:"welcome to my temp page",
//     },
//         {
//         id:1,
//         name:"santosh",
//         mess:"welcome to my temp page",
//     },
//         {
//         id:1,
//         name:"santosh",
//         mess:"welcome to my temp page",
//     }
// ]);




res.json([
//the methods are identical when an object or array is passed but res.json( will also convert non-objects, such as null and undefined ,which are not valid json 

    {
    id:1,
    name:"santosh",
    mess:"welcome to my temp page",
},
    {
    id:null,
    name:"santosh",
    mess:"welcome to my temp page",
},
    {
    id:1,
    name:"santosh",
    mess:"welcome to my temp page",
},
    {
    id:1,
    name:"santosh",
    mess:"welcome to my temp page",
}
]);
    
})
app.get("/www.santosh.com",(req,res)=>{
    res.status(200).send("welcome to my santosh page");
})

app.listen(8000,(req,res)=>{
    console.log("server is running on port 8000");
})