// Function to simulate fetching data from API with delay
function fetchDataFromAPI(data) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(`Fetching data from API for ${data}`);
        resolve(`${data} from API`);
      }, 2000); // Simulate a delay of 2 seconds
    });
  }
  
  // Function to process data with delay
  function processData(data) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(`Processing data: ${data}`);
        resolve(`Processed ${data}`);
      }, 1500); // Simulate a delay of 1.5 seconds
    });
  }
  
  // Function to display the final result with delay
  function displayResult(data) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(`Displaying result: ${data}`);
        resolve();
      }, 1000); // Simulate a delay of 1 second
    });
  }
  



// Chaining Promises
fetchDataFromAPI("John")
  .then((apiResult) => processData(apiResult))
  .then((processedResult) => displayResult(processedResult))
  .then(() => {
    console.log("All tasks completed!");
  })
  .catch((error) => {
    console.error("Error occurred:", error);
  });






//   Another example


// Simulate fetching user data from a server
function fetchUserData(userId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const userData = {
          id: userId,
          name: "John Doe",
          email: "john@example.com",
        };
        resolve(userData);
      }, 1000);
    });
  }
  
  // Simulate fetching posts for a user
  function fetchUserPosts(userId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const userPosts = [
          { id: 1, title: "First Post" },
          { id: 2, title: "Second Post" },
        ];
        resolve(userPosts);
      }, 1500);
    });
  }
  
  // Chain promises to fetch user data and posts
  fetchUserData(1)
    .then((user) => {
      console.log("User Data:", user);
      return fetchUserPosts(user.id); // Return a new Promise to chain
    })
    .then((posts) => {
      console.log("User Posts:", posts);
      console.log("Finished fetching user data and posts.");
    })
    .catch((error) => {
      console.error("An error occurred:", error);
    });
  