const path = require("path");

// console.log(path.dirname('D:/nodejs/pathModule/path.js'))//gives path
// console.log(path.extname('D:/nodejs/pathModule/path.js'))//gives path and extension 
// console.log(path.basename('D:/nodejs/pathModule/path.js'))//give path ,extension and file name 
// console.log(path.parse('D:/nodejs/pathModule/path.js'));//returns object whose property represent significant element of the path (dir,root,base,name,ext)


//to call a particular thing 
const mypath=path.parse('D:/nodejs/pathModule/path.js');
console.log(mypath.name);
console.log(mypath.root);