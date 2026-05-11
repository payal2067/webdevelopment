//  1.Create two variables and perform addition,
// subtraction, multiplication, and division.
let a = 20;
let b = 5;
console.log(a + b); //addition
console.log(a - b); //subtraction
console.log(a * b); //multiplication
console.log(a / b); //division

// 2. Find the remainder when two numbers are
// divided using the modulus operator.
let c = 51;
let d = 5;
console.log(c % d);

// 3.Use the exponent operator to calculate power of a number.
let e = 4;
let f = 5;
console.log(e ** f);

//  4.Assign a value to a variable and then update it
//  using += and -= operators.
let value = 10;
value += 20;
console.log(value);
value -= 5;
console.log(value);

// 5.Use *= and /= operators to modify a variable’s value.
let value2 = 30;
value2 *= 2;
console.log(value2);
value2 /= 5;
console.log(value2);

// 6.Compare two values using == and === and observe the result.
let g = 10;
let h = 10;
let name = "Payal";
console.log(g == h, g == name); //compare data
console.log(g === h, g === name); // compare dataType

// 7.Use comparison operators (>, <, >=, <=) to check
//  different conditions.
let i = 5;
let j = 6;
let k = 5;
console.log(i < j, k > j, i >= j, i <= k);

// 8.Create two variables and check if both conditions
//  are true using &&.
let l = 7;
let m = 7;
let n = 7;
if (l == m && m == n) {
  console.log(true);
} else {
  console.log(false);
}

// 9.Use ! operator to reverse a boolean value.
let o = 13;
let p = 12;
console.log(!(o < p));

// 10. Demonstrate pre-increment and postincrement and observe
//  the difference.
let q = 5;
++q; //pre-increment
console.log(q);
q++; //post-increment
console.log(q);

// 11. Demonstrate pre-decrement and postdecrement and observe
//  the difference.
let r = 10;
--r; // pre-Decrement
console.log(r);
r--; //Post-Decrement
console.log(r);

// 12. Use the ternary operator to check if a number
// is pass or fail (marks ≥ 40).
let marks = 45;
let result;
if (marks >= 40) {
  result = "Pass";
} else {
  result = "Fail";
}
console.log(result);

// 13. Combine multiple conditions using logical operators
// (like marks > 80 AND attendance > 75)
let marks1 = 90;
let attendance = 50;
if (marks1 > 80 && attendance > 75) {
  console.log("Eligible for reword");
}
else{
    console.log("not Eligible");  
}

// 14. Use typeof operator to check the data type of different values.
let s = 56;
let t = true;
console.log(typeof s , typeof t);
