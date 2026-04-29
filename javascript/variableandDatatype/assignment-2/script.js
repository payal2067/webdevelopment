 console.log("hello");

 var a = 5;
 var a = "hello";

 let c = "payal";
let d = 4;
c = 5;
let b = true;
const pi = 3.14; // Use constant vale

let x = 10;
let y = '10';
console.log(x==y);

console.log(x===y);

// 1. Variables for name, age, student status
let name = "Payal";
let age = 20;
let isStudent = true;

// 2. Using var, let, const
var city = "Bhopal";
let course = "BTech";
const college = "IES university";

// 3. Declaration first, then initialization
let hobby;
hobby = "Coding";

// 4. Different data types
let number = 1912;               // number
let string = "Hello Payal";      // string
let boolean = false;             // boolean

// 5. undefined and null
let notAssigned;                 // undefined
let emptyValue = null;           // null

// 6. typeof check
console.log(typeof name);           // string
console.log(typeof age);            // number
console.log(typeof isStudent);      // boolean
console.log(typeof notAssigned);    // undefined
console.log(typeof emptyValue);     // object (important interview point)

// 7. Multiple variables display together
console.log("Name:", name, 
            "Age:", age, 
            "Student:", isStudent, 
            "City:", city, 
            "Course:", course, 
            "College:", college,
            "Hobby:", hobby);

 // 8. Simple Calculation (Addition)
let num1 = 10;
let num2 = 20;

let sum = num1 + num2;

console.log("Sum is:", sum);

// 9. Object for Student Details
let student = {
    name: "Payal",
    age: 20
};

console.log(student);
console.log("Name:", student.name);
console.log("Age:", student.age);

// 10. Dynamic Typing (Change Data Type)
let data = 100;     // number
console.log(typeof data);

data = "Hello";     // now string
console.log(typeof data);

// 11. const Variable Behavior
const pi = 3.14;

// Trying to change value
pi = 3.14159;  // ❌ Error

console.log(pi);