// Chapter 04 
// Strings in Javascript

let name = "Rama";
ans = `Name of the Boy is ${name} and length is ${name.length}` //string interpolation
console.log(ans); //string interpolation

// escape sequence in js

user = "Marcus \D'Raman;"
console.log(user);

// quiz for printing a name using for loop

for (let i = 0; i < name.length; i++) {

    console.log(name[i]);
};
console.log(name.toUpperCase()); // UpperCase
console.log(name.toLowerCase()); //LowerCase
console.log(name.slice(1)); //  slicing
console.log(name.trim());  // trimming , removing white spaces
console.log(name.concat(' is a boy '));  // concatenation