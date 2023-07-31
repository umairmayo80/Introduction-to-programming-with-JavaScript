// Exploring primitive data types in JavaScript

// Number data type can hold integer and floating-point values.
let age = 25;
let price = 12.99;

// Performing arithmetic operations.
let sum = age + price;
let multiplied = age * 2;
let divided = price / 2;

console.log("Number:");
console.log("Age:", age, typeof age);
console.log("Price:", price, typeof price);
console.log("Sum:", sum, typeof sum);
console.log("Multiplied:", multiplied, typeof multiplied);
console.log("Divided:", divided, typeof divided);

// String data type holds a sequence of characters enclosed in single or double quotes.
let name = "John";
let message = "Hello, " + name + "!";

console.log("\nString:");
console.log("Name:", name, typeof name);
console.log("Message:", message, typeof message);

// Boolean data type represents true or false values.
let isStudent = true;
let isEmployee = false;

console.log("\nBoolean:");
console.log("Is Student:", isStudent, typeof isStudent);
console.log("Is Employee:", isEmployee, typeof isEmployee);

console.log("\nBoolean:");
if (isStudent) {
  console.log("You are a student.");
} else {
  console.log("You are not a student.");
}


// Null represents the intentional absence of any object value.
let noValue = null;

console.log("\nNull:");
console.log("Value:", noValue, typeof noValue); // Output: null object

// Undefined represents a declared variable that hasn't been assigned a value.
let undefinedValue;

console.log("\nUndefined:");
console.log("Value:", undefinedValue, typeof undefinedValue); // Output: undefined undefined
