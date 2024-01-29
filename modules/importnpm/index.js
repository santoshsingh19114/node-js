
// import chalk from 'chalk';
const chalk=require("chalk")
const validator = require("validator");

console.log(chalk.greenBright.underline.inverse('success'));
console.log(chalk.redBright.underline.inverse('false'));

const res = validator.isEmail("santosh@gmail.com")
console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));

