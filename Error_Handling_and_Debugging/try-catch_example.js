// The try-catch statement allows you to handle errors gracefully. It lets you attempt to execute a block of code (in the try block) and provides a way to handle any errors that may occur (in the catch block).

// try {
//     tryStatements
//   } catch (exceptionVar) {
//     catchStatements
//   } finally {
//     finallyStatements
//   }

function divide(a, b) {
    try {
      if (b === 0) {
        throw new Error("Division by zero is not allowed.");
      }
      return a / b;
    } catch (error) {
      console.error("An error occurred:", error.message);
      // You can choose to handle the error here or re-throw it to the calling context.
      // throw error; // Uncomment this line to re-throw the error.
    }
  }
  
  console.log(divide(10, 0)); // Output: An error occurred: Division by zero is not allowed.
  



//   You can use the finally block to execute code that needs to run regardless of whether an error occurred or not.


function fetchData() {
    try {
      // Fetch data from the server
      return response;
    } catch (error) {
      console.error("An error occurred:", error.message);
    } finally {
      console.log("Cleanup and resource release.");
    }
  }
  
  fetchData();
  



//   Catch binding
try {
    throw new TypeError("oops");
  } catch ({ name, message }) {
    console.log(name); // "TypeError"
    console.log(message); // "oops"
  }