//  1.Declare a global variable and print it.
let collegeName = "IES UNIVERSITY";
function classRoom(){
  console.log(collegeName);         // Accessible here
  
}
console.log(collegeName);           // Accessible globally
classRoom();

// 2.Declare a global variable and access it inside a
// function.
function classRoom() {
let schoolName = "IES UNIVERSITY";
console.log(schoolName); // Accessible here
}
classRoom();
// console.log(schoolName); // Error

// 3.Create a function and declare a local variable
// using var, then print it inside the function.
function classRoom() {
var teacherName = "Mr. Sharma";
console.log(teacherName); // Accessible here
}
classRoom();
// console.log(teacherName); // Error

// 4.Try to access a local variable outside the
// function and observe the error.


// 5.Create a function and declare a variable inside
// an if block using let, then print it inside the
// block.


// 6.Try to access the let variable outside the block
// and observe the error.


// 7.Declare a variable using const inside a block
// and print it inside the block.


// 8.Try to access the const variable outside the
// block and observe the error.

// 9.Create a program with:
// • one global variable
// • one local variable
// • one block variable
// and print them where accessible.


//  10. Write a program to demonstrate:
// • var works inside entire function
// • let and const work only inside block { }