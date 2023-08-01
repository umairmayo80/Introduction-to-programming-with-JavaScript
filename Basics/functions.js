// normal functions with declaration
function functionName(parameters){
    // Function body
    return 1; //value
}
// invoke the function
console.log(functionName())


// function parameter are impilictly declared with function scope and behave like var
function greet(name){
    return "Hello, " + name + "!";
}

console.log(greet("Umair"))
// console.log(name)// Output: ReferenceError: name is not defined

var age =10
function getAge(age){
    age+=20 // it will update the function varibale 'age' not the global varibale
    return age;
}

console.log("getAge-age:",getAge(1)); // 21
console.log(age); // 10

function getAge1(age1){
    age+=20 // now, it will update the global varibale age
    return age1;
}

console.log("getAge-age1:", getAge1(1));// 1
console.log(age); // 21



// function expression
const functionName1 = function (parameters){
  // Function body - Code to be executed
  return value; // Optional - The value to be returned from the function
}

//  example
const add = function(a,b) {
    return a+b;
}

var sum_var = add(5,3);
console.log("sum:",sum_var);


// Arrow Function (ES6):
// A more concise way of writing functions introduced in ES6:
const functionName2 = (parameters) => {
  // Function body - Code to be executed
  return value; // Optional - The value to be returned from the function
};

const multiply = (a,b) => {
    return a*b;
};

const product = multiply(4,6);
console.log("product:", product); // 24

// Default Parameters:
// Functions can have default parameter values if no argument is provided:


function greet(name = "Anonymous") {
  return "Hello, " + name + "!";
}

console.log(greet()); // Output: Hello, Anonymous!
console.log(greet("John")); // Output: Hello, John!


// Rest Parameters:
// Using the rest parameter to accept multiple arguments as an array:
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
//   arr.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])
//   here accumulator is total that contains the final single value
//  array is num
//  initial value for the accumulator is 0
}

console.log(sum(1, 2, 3, 4, 5)); // Output: 15


// 7. Callback Functions:
// Functions can take other functions as arguments, known as callback functions:

function doSomething(callback) {
  console.log("Doing something...");
  callback();
}

function finishTask() {
  console.log("Task finished!");
}

doSomething(finishTask); // Output: Doing something... \n Task finished!


// 8. Anonymous Function
// A function without a name, often used as a callback function:


setTimeout(function () {
  console.log("Delayed message!");
}, 2000); // O


console.log("asd");

// 9. Immediately Invoked Function Expression (IIFE):
// A function that is executed immediately after it is defined
(function () {
    console.log("I am a IIFE!");
})();


console.log("This is the end here!")