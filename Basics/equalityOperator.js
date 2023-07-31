

// simple equal operator only checks the value, not the type
console.log(5 == "5"); // Output: true (coerces string "5" to number 5 for comparison)
console.log(1 == true); // Output: true (coerces boolean true to number 1 for comparison)
console.log(null == undefined); // Output: true (both are considered equal without type coercion)


//  strict equal operator checks both both and type
console.log(5 === "5"); // Output: false (string "5" and number 5 are of different types)
console.log(1 === true); // Output: false (number 1 and boolean true are of different types)
console.log(null === undefined); // Output: false (null and undefined are of different types)

