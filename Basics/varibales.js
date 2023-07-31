// Variable declaration using 'var' keyword (Function scope).
var age = 25;

// Variable declaration using 'let' keyword (Block scope).
let fname = "John";

// Variable declaration using 'const' keyword (Block scope).
const PI = 3.14;

// Variables declared with 'var' can be re-declared in the same scope.
var age = 30;

// Variables declared with 'let' cannot be re-declared in the same scope.
// Uncommenting the line below will cause an error:
// let name = "Jane";

// Variables declared with 'const' cannot be re-declared or reassigned.
// Uncommenting the line below will cause an error:
// const PI = 3.14159;

// Variables can be reassigned if declared with 'let' or 'var'.
fname = "Jane";
age = 35;

// Using variables in expressions.
var birthYear = 2000;
var currentYear = new Date().getFullYear();
var ageNow = currentYear - birthYear;

// Printing the values of variables using 'console.log'.
console.log("Name:", fname);
console.log("Age:", age);
console.log("PI:", PI);
console.log("Age Now:", ageNow);
