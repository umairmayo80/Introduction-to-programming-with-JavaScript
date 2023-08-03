/*
"async and await make promises easier to write"

async makes a function return a Promise

await makes a function wait for a Promise
*/

// Async Syntax
// The keyword async before a function makes the function return a promise:

async function myFunction() {
  return "Hello";
}

//   Is the same as:

function myFunction1() {
  return Promise.resolve("Hello");
}


console.log(myFunction());
console.log(myFunction1());


// Here is how to use the Promise:

myFunction().then(
  function(value) { console.log(value) },
  function(error) { /* code if some error */ }
);



// Await Syntax
// The await keyword can only be used inside an async function.

// The await keyword makes the function pause the execution and wait for a resolved promise before it continues:

async function myDisplay() {
    let myPromise = new Promise(function(resolve, reject) {
      // resolve("I love You !!");
      reject("Error")
    });
    // let value = await myPromise;
    // console.log(value)
    // return value;

    try {
      const result = await myPromise;
      console.log(result); // Output: { name: "John", age: 30 }
    } catch (error) {
      console.error(error);
    }
  }
  
  myDisplay()
  console.log(2)