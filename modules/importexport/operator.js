const add =(a, b) =>{
return a+b;
}
const sub =(a, b) =>{
return a-b;
}

const mult =(a, b) =>{
    return a*b;
    }
const name = "santosh";
//for single export 
// module.exports=add;

//for multiple export

// module.exports.add=add;
// module.exports.sub=sub;
// module.exports.mult=mult;



//one liner

module.exports ={
    add, sub,mult
};