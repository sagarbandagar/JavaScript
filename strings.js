// Chapter 04 
// Strings in Javascript

let Username = "Rama";
ans = `Name of the Boy is ${Username} and length is ${Username.length}` //string interpolation
console.log(ans); //string interpolation

// escape sequence in js

const user = "Marcus \D'Raman;"
console.log(user);

// quiz for printing a name using for loop

for (let i = 0; i < Username.length; i++) {

    console.log(Username[i]);
}
console.log(Username.toLowerCase()); //LowerCase
console.log(Username.slice(1)); //  slicing
console.log(Username.trim());  // trimming , removing white spaces
console.log(Username.concat(' is a boy but less than 18 '));  // concatenation
console.log(Username.toUpperCase()); // UpperCase