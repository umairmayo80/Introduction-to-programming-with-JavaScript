// Destructuring is a feature in JavaScript that allows you to extract values from objects and arrays and assign them to variables in a more concise and readable way. It simplifies the process of accessing nested data structures and is particularly useful when working with large objects or arrays.

// 1. Basic Object Destructuring:
// You can extract values from an object and assign them to variables with the same name as the object's property.

var person = { name: "John", age: 30, country: "US" };

// the varibale name must match the property name
// it makes deep copy of both non-reference objects and reference objects
var { name, age, country } = person;

console.log(name);
console.log(age);
console.log(country);

country = "abc";
console.log(person);
console.log(country);

// shallow copy test
console.log('deep copy test')
var person = { name: "John", age: 30, country: "US", data: [1,2,3,4] };
console.log(person)

var { name, age, country, data } = person;

data = [1,2]

console.log(data)
console.log(person) // will remain the same, original { name: "John", age: 30, country: "US", data: [1,2,3,4] };



// 2. Renaming Variables during Destructuring:
// You can also assign the extracted values to variables with different names.

var person = { name: "John", age: 30, city: "New York" };

// Destructuring assignment with renamed variables
var { name: fullName, age: years, city: location } = person;

console.log(fullName); // Output: John
console.log(years); // Output: 30
console.log(location); // Output: New York


// 3. Default Values:
// Destructuring allows you to specify default values in case a property is missing from the object.

var person = { name: "John", age: 30 };

// Destructuring with default values
var { name, age, city = "Unknown" } = person;

console.log(name); // Output: John
console.log(age); // Output: 30
console.log(city); // Output: Unknown

