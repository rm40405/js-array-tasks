/*
4. Checking if it's an Array
Instructions:

Create different variables, each containing either an array or a non-array value.

Now use isArray to check if each variable is an array.

Print a message to the console indicating whether each variable is an array or not.
*/

// Example variables

let arr = [1, 2, 3];
let nonArr = "Hello, World!";

// Check if each variable is an array
console.log("cheking is an array: "+Array.isArray(arr));

console.log("Checking is an array: "+Array.isArray(nonArr));