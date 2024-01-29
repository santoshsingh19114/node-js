const fs = require('fs');

// fs.mkdirSync("thapa");

fs.writeFileSync('thapa/bio.txt',"my name is santosh "); 

fs.appendFileSync("thapa/bio.txt", "welcome to world");

const data =fs.readFileSync("thapa/bio.txt","utf-8");
console.log(data);

fs.renameSync("thapa/Bio.txt","./mybio.txt");

fs.unlinkSync("./mybio.txt");

fs.rmdirSync("thapa");