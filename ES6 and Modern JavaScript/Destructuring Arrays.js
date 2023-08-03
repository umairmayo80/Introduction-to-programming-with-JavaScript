// 1. Destructuring Arrays:
// Basic Array Destructuring:
// You can extract values from an array and assign them to variables based on their position in the array.

var numbers = [1,2,3,4,5]
var [first, second, third] = numbers

console.log(first)
console.log(second)
console.log(third)

// 2. Skipping Elements:
// You can skip elements in the array by using commas without assigning them to variables.
var numbers = [20, 30,40, 50]
// Skipping elements during destructuring
var [first,, third] = numbers

console.log(first); // Output: 1
console.log(third); // Output: 3

// 3. Rest Elements:
// The rest syntax (...) allows you to collect the remaining elements of an array into a new array.
numbers = [1,2,3,4,5]
// Using rest syntax to collect remaining elements
var [first, ...rest] = numbers;

console.log(first); // Output: 1
console.log(rest); // Output: [2, 3, 4, 5]

// 4. Swapping Variables:
// Destructuring can be used to swap the values of two variables without the need for a temporary variable.
console.log('swapping varibale using destructing')
let a = 5;
let b = 10;
// The Error was the missing of the semicolon before 10 
// If you decide to omit semicolons (no judgement, I prefer it that way too), don't forget to prefix lines beginning with array literals with ;. Occasionally, semicolon insertion does matter, because it might not occur when you want or expect it to.
// https://stackoverflow.com/questions/42562806/destructuring-assignment-and-variable-swapping

// Swap the values of 'a' and 'b' using destructuring
[a, b] = [b, a];

console.log(a); // Output: 10
console.log(b); // Output: 5




