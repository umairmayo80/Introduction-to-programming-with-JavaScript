// Template literals, also known as template strings, are a feature introduced in ECMAScript 6 (ES6) that provide a more flexible and improved way to format strings in JavaScript. They offer a convenient syntax for embedding expressions and variables inside strings, making string formatting more readable and efficient.

// To create a template literal, enclose the string within backticks (``) instead of single or double quotes:

// Template literals support the following features:

// String Interpolation:
// You can embed expressions and variables directly into the template string using ${expression}. These expressions will be evaluated and replaced with their corresponding values inside the string.

const name = "John";
const age = 30;

// Using template literals
const message = `Hello, my name is ${name} and I am ${age} years old.`;

console.log(message);
// Output: Hello, my name is John and I am 30 years old.

// Multiline Strings:
// Template literals allow you to create multiline strings without using the traditional line breaks (escape characters). Just type the content across multiple lines inside the backticks, and the string will retain the line breaks.

const multilineString = `
  This is a
  multiline
  string.
`;

console.log(multilineString);
// Output:
//   This is a
//   multiline
//   string.

// Expressions inside ${}:
// You can include any JavaScript expression inside ${}, not just simple variables. This enables more complex expressions or function calls within the template literals.
const a = 10;
const b = 5;

const result = `The sum of ${a} and ${b} is ${a + b}.`;
console.log(result);
// Output: The sum of 10 and 5 is 15.

// Tagged Templates (Advanced):
// Template literals can be used with tagged templates, where you can use a function (known as a tag) to process the template. The tag function receives the template strings and expressions as separate arguments, allowing you to perform custom formatting or processing.

function upper(strings, ...values) {
    console.log("string:", strings)
    console.log('values',values)
    const result = [];
    for (let i = 0; i < strings.length; i++) {
        if (i > 0) {
          const valueAsString = String(values[i - 1]); // Convert value to string
          result.push(valueAsString.toUpperCase());
        }
        result.push(strings[i]);
      }
      return result.join('');
    }

const name1 = "John";
const age1 = 30;

const message1 = upper`Hello, my name is ${name1} and I am ${age1} years old.`;
console.log(message1);
// Output: HELLO, MY NAME IS JOHN AND I AM 30 YEARS OLD.
