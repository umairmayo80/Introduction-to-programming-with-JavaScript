// Async and await example

const getData = async () => {
    console.log('initiated')
    try {
    const response = await fetch("data1.json");
    console.log("fetch resolved:",response);
    const data = await response.json();
    return data;
  } catch (err) {
    console.log("Error:", err);
  }
};



console.log(1)

const test = getData();
console.log(test); // it will be a promise object

console.log(2)

test.then((data) => {
  console.log("resolved:", data);
  console.log(test)
});



console.log(3)
