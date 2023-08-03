// const getData = (callback) => {
//     const request = new XMLHttpRequest();

//     request.addEventListener("readystatechange", () => {
//         console.log(request, request.readyState);
//         if (request.readyState === 4 && request.status === 200) {
//             //   console.log(request.responseText);
//             callback(undefined, request.responseText);
//         } else if (request.readyState === 4) {
//             //   console.log("could not fetch the data");
//             callback("could not fetch the data", undefined);
//         }
//     });

//     request.open("GET", "https://jsonplaceholder.typicode.com/todos/1");
//     request.send();
// };

// console.log(1);
// console.log(2);
// getData((err, data) => {
//     console.log("callback fired");
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// });

// console.log(3);
// console.log(4);

// // Here, getData initiates the send/fetch request and then set aside letting the other program continue and then in the end it continue getting data




// CallBack Hell scenario, nested callbacks in order

const getDataWithResources = (resource, callback) => {
    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
        // console.log(request, request.readyState);
        if (request.readyState === 4 && request.status === 200) {
            //   console.log(request.responseText);
            callback(undefined, request.responseText);
        } else if (request.readyState === 4) {
            //   console.log("could not fetch the data");
            callback("could not fetch the data", undefined);
        }
    });

    request.open("GET", resource);
    request.send();
};

getDataWithResources(
    "https://jsonplaceholder.typicode.com/todos/1",
    (err, data) => {
        console.log(data);
    }
);

getDataWithResources(
    "https://jsonplaceholder.typicode.com/todos/2",
    (err, data) => {
        console.log(data);
    }
);

getDataWithResources(
    "https://jsonplaceholder.typicode.com/todos/3",
    (err, data) => {
        console.log(data);
    }
);



/*
In the given code, you are making three asynchronous HTTP requests using the getDataWithResources function with different URLs. Each request is executed independently and asynchronously, so the order of execution and the order of the responses may vary.

However, the typical behavior would be as follows:

getDataWithResources is called with the URL "https://jsonplaceholder.typicode.com/todos/1". This initiates the first asynchronous HTTP request to fetch the data corresponding to that URL.

Similarly, getDataWithResources is called with the URL "https://jsonplaceholder.typicode.com/todos/2" and "https://jsonplaceholder.typicode.com/todos/3", initiating two more asynchronous HTTP requests.

Since the requests are asynchronous, the JavaScript engine continues executing the remaining code without waiting for the responses. As a result, the order of the three requests may not be the same as the order in which they were called.

Whichever request gets the response first (usually the one with a quicker server response) will trigger the corresponding callback function with the response data, and the response will be logged to the console for that request.

The same process happens for the remaining requests, and their callbacks are executed in the order of the responses.

So, the order of execution for the callbacks and their corresponding responses may not be in the same order as the calls were made. It will depend on the server response times and other factors. Therefore, the output in the console may appear in different orders for each run of the code.
*/

// To resolve it we do nesting and this create a callback hell:
// getDataWithResources(
//   "https://jsonplaceholder.typicode.com/todos/1",
//   (err, data) => {
//     console.log(data);
//     getDataWithResources(
//       "https://jsonplaceholder.typicode.com/todos/2",
//       (err, data) => {
//         console.log(data);
//         getDataWithResources(
//           "https://jsonplaceholder.typicode.com/todos/3",
//           (err, data) => {
//             console.log(data);
//           }
//         );
//       }
//     );
//   }
// );
