// The for loop is used to execute a block of code a specified number of times.
for (let i = 0; i < 5; i++) {
    console.log("Iteration: " + i);
  }

  

// while Loop:
// The while loop is used to execute a block of code as long as a specified condition is true.
let counter = 0;

while (counter < 5) {
  console.log("Counter: " + counter);
  counter++;
}



// do...while Loop:
// The do...while loop is similar to the while loop, but it always executes the block of code at least once before checking the condition.

let count = 0;
do{
    console.log("Count: "+count)
    count++
} while(count<5);



// for...in Loop (for Objects):
// The for...in loop is used to iterate over the properties of an object.

const person = {
  name: "John",
  age: 30,
  occupation: "Engineer",
};

for (let prop in person) {
  console.log(prop + ": " + person[prop]);
}



// for...of Loop (for Iterables):
// The for...of loop is used to iterate over iterable objects like arrays and strings.

const numbers = [1, 2, 3, 4, 5];

for (let num of numbers) {
  console.log(num);
}


console.log("----------------------------------")
// for of iterates over iteratable objects, so we first we get a list of entires and then we can iterate over it
for(let x of Object.entries(person)){
    console.log(x)
}



// here in takes the index on which a value is present
myChar = ['a','b','c']
for (let x in myChar) {
    console.log(x);
}





// For each method
console.log(".for each method")
numbers.forEach((num) => {
console.log(num);
});


// Map Method
const doubledNumbers = numbers.map((num) => num * 2);
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]