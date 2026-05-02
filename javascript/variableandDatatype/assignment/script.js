//  1.Create variables to store your name, age, and student
//  status (true/false).
let name = "Payal";
console.log(name);

let age = 24;
console.log(age);

let isStudent = true;
console.log(isStudent);

// 2.Declare variables using var, let, and const.

var a;                          //Can be redeclared and updated
a = 25;
console.log(a);


let b = 20;                     //Can be updated, but not redeclared in same scope
console.log(b);


const Rollnumber = 204;         //Used for fixed values
console.log(Rollnumber);


//3.Declare a variable first and assign a value later
// (declaration + initialization).

let c;                       //declaration
c = "55"; 
console.log(c);
                   //initialization

// 4.Create variables of different data types: number, string, boolean.
let d = 30;   
console.log(d);
              // number datatype
let collegeName = "IES UNIVERSITY";
console.log(collegeName);

let Boolean = true;
console.log(Boolean);

//5.Create one variable with undefined and another with null.
let e;
console.log(e);
let f = null;
console.log(f);

// 6.Use typeof to check the data type of different variables.
let g = 30;
let name2 = "Palak";
console.log(typeof g,typeof name2);

//7.Create multiple variables and display their values together.
let classroomNumber = 5;
let city = "Bhopal";
console.log("classroomNumber: " + classroomNumber + ", city: " + city);

//8.Create variables and perform a simple calculation (like addition).
let h = 6;
let i = 2;
console.log(h + i);

//9.Create an object to store student details (name and age).
let student = {
    name : "Ashok", age: 23
};
console.log(student);

// 10.Show dynamic typing by changing a variable from number to string.
let value = 2;
console.log(value);
value = "Two";
console.log(value);

// 11.Create a const variable and observe what happens when you
//  try to change its value.

const student2 = {
    name: "Prachi"
};
student2.name = "Payal";
console.log(student2);

// 1  You cannot change a const variable
// 2  It will give an error: Assignment to constant variable