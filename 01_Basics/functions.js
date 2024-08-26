// Chapter 11
//Functions in JavaScript

function sum(a, b) {
    return (a + b);
}
// when the function is returning any value then we need to store and invoke it

console.log('Sum is ', sum(10, 20));

// we can create arrow functions also and preferred

const hello = () => {
    console.log("Heyy , This is an arrow function");
}

const Hello_from2 =()=>{
    console.log("Hello from other function also ")
}

hello();
Hello_from2();