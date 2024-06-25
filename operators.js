// Chapter 06
// Expressions and operators

const prompt = require('prompt-sync')();  // to initialize a prompt

let a = 100
let b = 25
console.log('a+b is :', a + b)
console.log('a-b is :', a - b)
console.log('a*b is :', a * b)
console.log('a/b is :', a / b)
console.log('a%b is :', a % b)
console.log('a &&b is :', a && b)



// Ternary operator
const age =prompt("Enter your age");
Number.parseInt(age);
console.log("Hey You are ", (age < 18) ? 'Not eligible to vote' : 'eligible to vote');
