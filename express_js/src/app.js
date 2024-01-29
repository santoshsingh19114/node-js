var express =require ("express");

const app =express();


// app.get(route,callback)
app.get("/",(req,res)=>{
    res.send("Hello from the express");
})
app.get("/about",(req,res)=>{
    res.send("Hello from the about page");
})

app.listen(8000,()=>{
    console.log("Server is running on port 8000")
});
// API
// get -read 
// post - create 
// put - update 
// delete- delet