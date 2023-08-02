// Functions running in parallel with other functions are called asynchronous
// A good example is JavaScript setTimeout()

console.log(-1)

function fetchData(callback) {
    setTimeout(() => {
        const data = { name: "John", age: 30 };
        callback(data);
    }, 200); // Simulate an asynchronous task that takes 2 seconds
}

console.log(1)
fetchData((result) => {
    console.log(result); // Output: { name: "John", age: 30 }
});

console.log(2);



// Detailed Explanation:

// The fetchData function is defined with a single parameter called callback. It represents a function that will be executed later when the asynchronous task is completed.

// Inside the fetchData function, there is a setTimeout function. This function sets a timer to delay the execution of the code inside the function. It takes two arguments: a callback function and a time delay in milliseconds. In this case, the timer is set for 2 seconds (2000 milliseconds).

// The code inside the setTimeout callback creates a constant variable data with an object containing two properties: name with the value "John" and age with the value 30.

// After the 2-second delay, the callback function passed as an argument to fetchData is executed, and the data object is passed as an argument to the callback.

// In the main program, the statement console.log(1) is executed first, and it logs 1 to the console.

// The next line calls the fetchData function and passes an inline callback function (result) => { console.log(result); }. This callback function receives the data object from the fetchData function as its result parameter and logs the result (i.e., the data object) to the console.

// However, before the callback is executed, the program continues to execute the next statement, which logs 2 to the console.

// After the 2-second delay, the asynchronous task inside fetchData is completed, and the callback function (result) => { console.log(result); } is executed. It logs the data object { name: "John", age: 30 } to the console.

// The final output in the console will be:
// 1
// 2
// { name: "John", age: 30 }
// Note: The key aspect of this code is the asynchronous nature of the setTimeout function, which allows other code (like logging 2) to continue executing while the 2-second delay is taking place. Once the delay is over, the callback function is called, allowing us to handle the result of the asynchronous task.