//chapter 03
// difference between let , var and const
let a = 10;
let b = 20;
const c=100  // const cant be updated and cant be re-declared

console.log(a + b)
{
    let a = 100    // var can be updated and also can be redeclared
    console.log(a)  // let can be updated but not re-declared
}

let author='Sagar'
console.log(author)

// Chapter 04
// Primitive Data Types in Js are : NNBBSSU 
let null_exp= null ;// null
let num_exp=345;   // number
let boo_exp=true;   // boolean
let big_int=BigInt('11223344') // big int
let Symbol_exp=Symbol('XYZ') // symbol
let string_exp='Sagar'
let undefined_exp=undefined;

console.log(null_exp,num_exp,boo_exp,big_int,Symbol_exp,string_exp,undefined_exp)

//objects in Js are Non-Primitive Data types
// objects are in key:value pairs

const user ={
    'Name':'Sagar',
    'Role':'DevOps Engineer',
    'YOE': 1
}

console.log(user['Name'])



