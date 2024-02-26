var express =require ("express");
const path= require("path")
const app =express();


// console.log(__dirname);
// console.log(path.join(__dirname,'../public'));
const staticPath=path.join(__dirname,'../public');


app.set("view engine","hbs"); //handlebars is the templating engine




//built-in middleware
// app.use(express.static(staticPath));




//template engine route   

app.get("/",(req,res)=>{
    res.render('index',
    {channelName:"santosh"})
});

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