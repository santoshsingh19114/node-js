// const name = require("./operator");
// const add = require("./operator")
// console.log(add(5,5));
// console.log(add);
//jis variable me hm require ko assign karenge usi ko console log krna padega;




//for mutiple export wo property maan kr object bna dega 

//jhanjhat wala kaam

// const operator = require("./operator")
// console.log(operator);
// console.log(operator.add(5,5));
// console.log(operator.sub(10,5));




// const { add,sub} = require("./operator")
// console.log(add(5,5));
// console.log(sub(10,5));


const { add,sub,mult} = require("./operator")
console.log(add(5,5));
console.log(sub(10,5));
console.log(mult(10,5));