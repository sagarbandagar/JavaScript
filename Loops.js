//Chapter 05
//Loops in JS 

let arr = [1, 2, 3, 4, 5]

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
} // regular method that we use

let ans = Array.from(arr)
console.log(ans);   // to convert other objects into array of js

//for each loop in js
arr.forEach((element) => {
    console.log(element * element);
}
)


// alternate method
let array = [100, 200, 300, 400]

for (let i in array) {
    console.log(array[i]);
}



