let a = 10;
let b = 4;
//  1. Addition, Subtraction, Multiplication, Division
console.log("Addition :", a + b);
console.log("Subtraction :", a - b);
console.log("Multiplication :", a * b);
console.log("Division :", a / b);

// 2. Modulus (Remainder)
console.log("Remainder :", a % b);

// 3. Exponent (Power)
let num = 5;
console.log("Power :", num ** 3);

// 4. Using += and -=
let value = 20;

value += 5;                         // 20 + 5
console.log("After += :", value);

value -= 3;                         // 25 - 3
console.log("After -= :", value);

// *5. Using = and /=
let num2 = 10;

num2 *= 2;                           // 10 * 2
console.log("After *= :", num2);

num2 /= 5;                           // 20 / 5
console.log("After /= :", num2);

// 6. == vs ===
let p = 15;
let q = "15";

console.log(p == q);                 // true (only value check)
console.log(p === q);                // false (value + type check)

// 7. Comparison Operators
let m = 10;
let n = 20;

console.log(m > n);                  // false
console.log(m < n);                  // true
console.log(m >= 10);                // true
console.log(n <= 15);                // false

// 8. Check two conditions using &&
let age = 18;
let hasLicense = true;

if (age >= 18 && hasLicense) {
    console.log("You can drive");
} else {
    console.log("You cannot drive");
}

// 9. Use ! operator (NOT)
let isLoggedIn = false;

console.log(!isLoggedIn);           // true (reverse)

// 10. Pre-increment vs Post-increment
let a = 5;

console.log(++a);                  // 6 (first increase, then use)

let b = 5;
console.log(b++);                  // 5 (first use, then increase)
console.log(b);                    // 6

// 11. Pre-decrement vs Post-decrement
let x = 5;

console.log(--x);                  // 4 (first decrease, then use)

let y = 5;
console.log(y--);                  // 5 (first use, then decrease)
console.log(y);                    // 4

// 12. Ternary Operator (Pass / Fail)
let marks = 45;

let result = (marks >= 40) ? "Pass" : "Fail";
console.log(result);

// 13. Multiple conditions (AND)
let marks2 = 85;
let attendance = 80;

if (marks2 > 80 && attendance > 75) {
    console.log("Eligible");
} else {
    console.log("Not Eligible");
}

// 14. typeof operator
let name = "Payal";
let age2 = 21;
let isStudent = true;
let data = null;

console.log(typeof name);            // string
console.log(typeof age2);            // number
console.log(typeof isStudent);       // boolean
console.log(typeof data);            // object (special case)


