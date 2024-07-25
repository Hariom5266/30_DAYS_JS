// main.js
const add = require('./add');

const result = add(5, 7);
console.log(`The sum is: ${result}`);

// main.js
const person = require('./person');

console.log(`Person's name: ${person.name}`);
person.greet();

// main.js
const { add, subtract, multiply } = require('./mathUtils');

console.log(`Addition: ${add(5, 3)}`);
console.log(`Subtraction: ${subtract(5, 3)}`);
console.log(`Multiplication: ${multiply(5, 3)}`);

// main.js
const divide = require('./divide');

try {
    console.log(`Division: ${divide(10, 2)}`);
} catch (error) {
    console.log(error.message);
}

// main.js
const math = require('./constantsAndFunctions');

console.log(`PI: ${math.PI}`);
console.log(`E: ${math.E}`);
console.log(`Addition: ${math.add(3, 4)}`);
console.log(`Multiplication: ${math.multiply(3, 4)}`);
