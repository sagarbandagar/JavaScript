// // //Chapter 05
// // //Loops in JS 

let arr = [1, 2, 3, 4, 5]

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
// regular method that we use

let ans = Array.from(arr)
console.log(ans);   // to convert other objects into array of js

// alternate method
let array = [100, 200, 300, 400]

for (let i in array) {
    console.log(array[i]);
}



const new_arr = [5, 10, 15, 20]

new_arr.forEach((value, index, array) => {
    console.log(value, index, array)
})

// map in array 
let a =[500,550,600,650]
let newArray =a.map((value)=>{
    return value + value;
})
console.log(newArray);
console.log(a);

// Filter in array
let filter_array=a.filter((value)=>{
    return value < 600
})
console.log(filter_array)
console.log(a)