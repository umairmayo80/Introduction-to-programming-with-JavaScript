
// Adding Elements:
// push(): Adds elements to the end of the array.
// unshift(): Adds elements to the beginning of the array.

const fruits = ["apple", "orange","ok"]

fruits.push("banana") // add element to the end ["apple", "orange", "banana"]
console.log(fruits)

fruits.unshift("grape"); // add element to the last ["grape", "apple", "orange", "banana"]
console.log(fruits)


// .lenght attribute to get the lenght
console.log(fruits.length)


// Removing Elements:
// pop(): Removes the last element from the array and returns it.
// shift(): Removes the first element from the array and returns it.
// splice(): Removes elements from the specified index and can insert new elements.



console.log(fruits.pop())
console.log(fruits.shift())

// start from 0-index and till 2 (open boundry means it is not included)
console.log(fruits.splice(0,2, "mango","cherry","Guava"))
console.log(fruits)


// 6. Iterrating over arrays:
for(let i =0; i<fruits.length; i++){
    console.log(fruits[i]);
}


// using .for each method
console.log("---Iterating array using .forEach method---");
function display(value){
    console.log(value)
}
// passing named function
fruits.forEach(display)


// passing arrow function
console.log("---Using Arrow function in .forEach()---")
fruits.forEach((fruit)=>{
    console.log(fruit)
});

//7. Array methods:
// JavaScript provides many built-in array methods to perform various operations on arrays, such as map(), filter(), reduce(), slice(), etc.

const numbers = [1,2,3,4,5]

let doubled = numbers.map((num)=> {return num*2});
doubled = numbers.map((num)=> num*2); //same effect as above
console.log(doubled)


// filter receives a predict fucntion that returns true or false
var evenNumbers = numbers.filter((num) => {return num%2===0});
// var evenNumbers = numbers.filter((num) => num%2===0);
console.log(evenNumbers)


// .reduce
var sum = numbers.reduce( (total, num)=> total+num,0);
//   arr.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue]))
//   here accumulator is total that contains the final single value
//  array is num
//  initial value for the accumulator is 0
console.log(sum)

