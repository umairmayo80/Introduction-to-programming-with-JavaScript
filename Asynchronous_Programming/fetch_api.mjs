// Instead of using require (require is used to load modules from commonJS), use import to import the fetch function from node-fetch which is a (ECMAScript module)
// Make sure your environment supports ES modules. In Node.js, starting from version 12, you can use the --experimental-modules flag or rename your file with the .mjs extension to enable ES modules.

import fetch from 'node-fetch';

fetch('https://jsonplaceholder.typicode.com/todos/5')
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(error => console.error('Error:', error));




// The basic syntax of the `fetch()` function is as follows:

// ```javascript
// fetch(url [, options])
//       .then(response => {
//       // Handle the response (may involve parsing JSON or checking status)
//       return response.json(); // Return a Promise containing the parsed JSON data
//       })
//       .then(data => {
//       // Handle the parsed data
//       })
//       .catch(error => {
//       // Handle any errors that occurred during the fetch
//       });
// ```

// - `url`: The URL of the resource you want to fetch. It could be a relative or absolute URL.
// - `options` (optional): An object containing options for the fetch request, such as headers, request method (GET, POST, etc.), body, etc.


// const url = 'https://api.example.com/data';

// const options = {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//     'Authorization': 'Bearer token123'
//   },
//   body: JSON.stringify({ key: 'value' }),
//   mode: 'cors',
//   credentials: 'include'
// };

// fetch(url, options)
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error('Error:', error));




