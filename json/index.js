// JSON stand for javascrript object notation
// it is a lightweight data-interchange format
//format for storing and transporting data
//json is often used when data is sent from a server


fs=require("fs");

const bioData ={
    name:"vinod",
    age:26,
    profession:"Student"
};
//convert to json
//add into another file
//readfile
// again convert back to js obj original 
// console.log 

const jsonData = JSON.stringify(bioData);//stringify is used to convert object into json form
//{"name":"vinod","age":26,"profession":"Student"}

// fs.writeFile("json1.json",jsonData,(err)=>{
//     console.log("done");
// });


fs.readFile("json1.json","utf-8",(err,data)=>{
    
    const parseData =JSON.parse(data) ;//used to convert json data into normal
    console.log(parseData);
    console.log(data);
    

});
// const objData = JSON.parse(jsonData);//stringify is used to convert object into json form
// //{ name: 'vinod', age: 26, profession: 'Student' }
// console.log(jsonData);
// console.log(objData);