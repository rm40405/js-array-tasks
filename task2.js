/*
2. Add or remove elements
Declare an array of 3 tourist destinations
Add a new tourist destination to your tourist array
Add two more to your array
Remove the last tourist destination you have added
display the final array as output
*/
let destinationArray = ["jamalpur","cumilla","barisal"];

console.log("Original Array:", destinationArray);

destinationArray.push("khulna");

console.log("Array after adding new destination:", destinationArray);

destinationArray.push("rajshahi");

console.log("Array after adding two more destinations:", destinationArray);

destinationArray.pop();

console.log("Array after removing the last destination:", destinationArray);