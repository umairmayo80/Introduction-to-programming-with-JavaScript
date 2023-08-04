// Classes in JavaScript:
// Class Declaration:
// In JavaScript, you can define a class using the class keyword followed by the class name. The class serves as a blueprint for creating objects with specific properties and methods.

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(
      `Helllo, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}

// Creating Objects (Instances):
// Once you've defined a class, you can create objects (instances) based on that class using the new keyword.

var person1 = new Person("John", 30);
console.log(person1);

// Methods and Properties:
// Classes can have both methods (functions) and properties (data). Methods define the behavior of the objects created from the class, while properties store the state of the objects.
person1.greet();

// Constructor Method:
// The constructor method is a special method that is automatically called when an object is created from the class. It allows you to set the initial state of the object.

class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  displayInfo() {
    console.log(`${this.make} ${this.model} ${this.year}`);
  }
}

var myCar = new Car("Toyota", "Camry", 2022);
myCar.displayInfo();

// Inheritance in JavaScript:
// Extending Classes:
// Inheritance allows you to create a new class that inherits properties and methods from an existing class (superclass). The new class is called a subclass.

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

// class Dog extends Animal {
//   speak() {
//     console.log(`${this.name} barks.`);
//   }
// }

// var dog = new Dog("Tony"); //it will call the super constructor 
// console.log(dog);
// dog.speak();

// Super Keyword:
// When defining a constructor in a subclass, you can use the super() method to call the constructor of the superclass.
// we cannnot redefine the class
class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }

    speak(){
        console.log(`${this.name} (${this.breed}) barks.`);
    }
}


var dog1 = new Dog("Kb",'jem')
console.log(dog1)
dog1.speak()


// Prototypes in JavaScript:
// Prototype Chain:
// In JavaScript, classes are implemented using prototypes behind the scenes. Each object created from a class has a hidden link to the prototype of that class, known as the prototype chain.

// Prototype Methods:
// Prototype methods are shared across all instances of a class and are stored in the prototype object. When a method is called on an instance, JavaScript looks for the method in the instance first and then follows the prototype chain to find it.



// Encapsulation:
// Encapsulation is the bundling of data and methods that operate on that data within a single unit, typically a class. This allows you to control access to the internal state of an object and maintain its integrity.

// Abstraction:
// Abstraction allows you to hide the internal implementation details of a class from the outside world, exposing only the essential features and functionality.


// Polymorphism in OOP
// Polymorphism allows objects of different classes to be treated as instances of a common superclass. This enables you to write more generic code that works with different types of objects.

class Shape{
    getArea() {
        return 0;
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius
    }


    getArea() {
        return Math.PI * this.radius * this.radius;
    }
}


class Square extends Shape {
    constructor(side) {
        super();
        this.side =side
    }


    getArea(){
        return this.side* this.side;
    }
}


var shape = new Square(12);
console.log(shape)
console.log(shape.getArea())