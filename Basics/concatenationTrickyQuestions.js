console.log("Hi "+ "User") // Hi User

// If you put a number in quotes, the rest of the numbers will be treated as strings, and concatenated.
var x = "5" + 2 + 3;
console.log(x) //523

var x =  2 + 3 +"5";
console.log(x) //55


var obj = {
	a: "hello world", // property
	b: 42,
	c: true
};
console.log(typeof obj) //object


console.log('1 + "1":', 1 + "1"); // Output: 1 + "1": 11 (string concatenation)
console.log('1 - "1":', 1 - "1"); // Output: 1 - "1": 0 (numerical subtraction)

console.log('3 + 3:', 3 + 3); // Output: 3 + 3: 6 (numerical addition)
console.log('"3" + "3":', "3" + "3"); // Output: "3" + "3": 33 (string concatenation)
console.log('"3" + 3:', "3" + 3); // Output: "3" + 3: 33 (string concatenation)
// console.log('"3" ++ "3":', "3" ++ "3"); // Error: Invalid syntax

// Here, the last "3" is converted to a number as +"3", and then the addition is performed.
console.log('3 + +"3":', 3 + +"3"); // Output: 3 + +"3": 6
console.log('3 + -"3":', 3 + -"3"); // Output: 3 + +"3": 6

console.log('3 + 3 - 3:', 3 + 3 - 3); // Output: 3 + 3 - 3: 6




var longString = "";
longString += "Once";
longString += " upon";
longString += " a";
longString += " time";
longString += "...";
console.log(longString); // "Once upon a time..."