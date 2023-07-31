// Creating symbols
const symbol1 = Symbol();
const symbol2 = Symbol("description"); // You can provide an optional description for debugging purposes.
const symbol3 = Symbol();
// Symbols are guaranteed to be unique.
console.log(symbol1 === symbol2); // Output: false
console.log(symbol1 === symbol3); // Output: false

// Using symbols as property keys in an object
const car = {
  [symbol1]: "Ford", // Using square brackets to use the symbol as a key
  [symbol2]: "Mustang",
  make: "Toyota",
  model: "Camry"
};

// Accessing properties with symbols as keys
console.log(car[symbol1]); // Output: Ford
console.log(car[symbol2]); // Output: Mustang

// Iterating over object properties (symbols will not be included in for...in loop)
for (const key in car) {
  console.log(key, car[key]);
}

// Get all symbol keys of an object
const symbols = Object.getOwnPropertySymbols(car);
console.log(symbols); // Output: [ Symbol(), Symbol(description) ]
console.log(car[symbols[0]]); // Output: Ford
console.log(car[symbols[1]]); // Output: Mustang
