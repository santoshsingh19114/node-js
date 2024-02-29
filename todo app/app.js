const express =require("express")
const mongoose =require('mongoose')
const bodyParser= require('body-parser');

const app =express()

app.set("view engine","ejs");
app.use(express.static("public"));
app.use (bodyParser.urlencoded({extended:true}));


mongoose.connect("mongodb://localhost:27017/todolist",{useNewUrlParser:true,useUnifiedTopology:true});
const itemSchema={
    name:String,
}

const item=mongoose.model("item",itemSchema)
const item1=new item({
    name:"welcome to todo app",
})
const item2=new item({
    name:"Add tasks",
});
const item3=new item({
    name:"thank you"
});
const d=[item1,item2,item3];
item.insertMany(d).then(()=>{
    console.log("Data inserted") 
}).catch((error)=>{
    console.log(error)
})






// console.log(item1);
app.get("/",(req,res)=>{

    item.collection.find( {},(err,f)=>{
        // console.log(f);
        res.render("list",{newListItems:f});
    } )


    // item.find({},(err,f)=>{
    //     // console.log(f);
    //     res.render("list",{newListItems:f});
    // }) 
// res.send("hey guys")

})


app.post("/",(req,res)=>{
     i =req.body.n;

    //  i1.push(i);
    // console.log(i);
    // res.render("list",{newListItem:i});
    res.redirect("/");
})


app.listen(3000 , ()=>console.log("server started  on port 3000"))