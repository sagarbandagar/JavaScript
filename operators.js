// Chapter 06
// Expressions and operators

let a = 100;
let b = 25;
console.log('a + b is :', a + b);
console.log('a - b is :', a - b);
console.log('a * b is :', a * b);
console.log('a / b is :', a / b);
console.log('a % b is :', a % b);
console.log('a && b is :', a && b);

// JSON string
let myJsonString = `{
    "name": "Sagar",
    "age": 23,
    "salary": [1000, 2000]
}`;

// Parse JSON string to JavaScript object
let parsedJson = JSON.parse(myJsonString);

console.log('Parsed JSON:', parsedJson);
console.log('Name:', parsedJson.name);
console.log('Age:', parsedJson.age);
console.log('Salaries:', parsedJson.salary);

// Access individual salaries
console.log('First Salary:', parsedJson.salary[0]);
console.log('Second Salary:', parsedJson.salary[1]);
