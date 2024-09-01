/*
3. Checking Array Membership with ‘includes’
Instructions:

Create an array of books containing different book.

Use the includes method to check if the array contains a javascript book.

Print a message to the console indicating whether the element is present in the array or not.
*/
let books = ["c++","python","java","javascript"];
if (books.includes("javascript")){
    console.log("The array includes the book 'javascript'");
}
else{
    console.log("The array does not include the book 'javascript'");
}