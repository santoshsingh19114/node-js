var express =require ("express");
const path= require("path")
const app =express();
const hbs =require("hbs");

// console.log(__dirname);
// console.log(path.join(__dirname,'../public'));
const staticPath=path.join(__dirname,'../public');
const templatepath=path.join(__dirname,'../templates/views')
const partialspath=path.join(__dirname,"../templates/partials")
app.set("view engine","hbs"); //handlebars is the templating engine
app.set("views",templatepath);  
hbs.registerPartials(partialspath)  //to register all handlebar files in templates folder



//built-in middleware
app.use(express.static(staticPath));




//template engine route   

app.get("/",(req,res)=>{
    res.render('index',
    {channelName:"santosh"})
});

app.get("/about",(req,res)=>{
    res.render("about");
});

// app.get(route,callback)
app.get("/about/*",(req,res)=>{
    res.render("404",{
        errorcomment:"oops about us page couldn't be found !"
    });
})
app.get("*",(req,res)=>{
    res.render("404",{
        errorcomment:"oops page couldn't be found !"
    });
})


app.listen(8000,()=>{
    console.log("Server is running on port 8000")
});