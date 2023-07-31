// normal functions with declaration
function functionName(parameters){
    // Function body
    return 1; //value
}
// invoke the function
console.log(functionName())


// function parameter are impilictly declared with function scope and behave like var
function greet(name){
    return "Hello, " + name + "!";
}

console.log(greet("Umair"))
// console.log(name)// Output: ReferenceError: name is not defined

var age =10
function getAge(age){
    age+=20 // it will update the function varibale 'age' not the global varibale
    return age;
}

console.log("getAge-age:",getAge(1)); // 21
console.log(age); // 10

function getAge1(age1){
    age+=20 // now, it will update the global varibale age
    return age1;
}

console.log("getAge-age1:", getAge1(1));// 1
console.log(age); // 21