// Creating a new Map
const myMap = new Map();

// Adding key-value pairs to the Map using the set() method
myMap.set("name", "John");
myMap.set("age", 30);
myMap.set("isStudent", false);

// Getting the value associated with a specific key using the get() method
console.log(myMap.get("name")); // Output: "John"

// Checking if a key exists in the Map using the has() method
console.log(myMap.has("age")); // Output: true

// Getting the size (number of key-value pairs) of the Map using the size property
console.log(myMap.size); // Output: 3

// Deleting a key-value pair from the Map using the delete() method
myMap.delete("isStudent");

// Iterating through the Map using a for...of loop
for (const [key, value] of myMap) {
  console.log(key, value);
}
// Output:
// "name" "John"
// "age" 30

// Clearing all key-value pairs from the Map using the clear() method
myMap.clear();

// Checking if the Map is empty after clearing it
console.log(myMap.size); // Output: 0



var myMap1 = new Map([
    ['name','Ali'],
    ['Age',30],
    [1,"123"]
]
)


console.log(myMap1)