/*
Real Life Objects, Properties, and Methods
In real life, a car is an object.

A car has properties like weight and color, and methods like start and stop:
*/

var person = {
    name: "John",
    "age": 10,
    displayInfo: function () {
        console.log("Person{Name: " + this.name + ", Age: " + this.age + "}");
    }
}

// Note: If key contain space we can use ""

console.log(person)

console.log(person.name)
console.log(person.age)

person.name = "New Name"
person.age = 123

console.log(person)



person.displayInfo()



person.occupation = "Engineer"; // Adding a new property
person.age = 31; // Modifying an existing property






// Nested Objects
var person = {
    name: "John",
    age: 30,
    address: {
        city: "New York",
        country: "USA",
    },
};

console.log(person.address.city); // Output: "New York"


// An Object can have methods

const calculator = {
    add: function (a, b) {
      return a + b;
    },
    subtract: function (a, b) {
      return a - b;
    },
  };
  
  console.log(calculator.add(5, 3)); // Output: 8



//   depreciated
//   function Person(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//  same as below and recommended approach 
    
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
  
  const john = new Person("John", 30);

  

//   What is the difference between class and objects in javaScript


var person = {
    name: "John",
    age: 30,
    occupation: "Engineer",
  };
  
  const keys = Object.keys(person); // ["name", "age", "occupation"]
  const values = Object.values(person); // ["John", 30, "Engineer"]
  const entries = Object.entries(person); // [["name", "John"], ["age", 30], ["occupation", "Engineer"]]
  
  console.log(keys)
  console.log(values)
  console.log(entries)