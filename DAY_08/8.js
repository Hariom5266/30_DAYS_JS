// 🍵, Hanji Kaise ho aap sabhi I am back ! This is 8th day of JS Challenge."I’m back and ready to code!"

// # ================================= ES6 + FEATURES ================================= #

// # ================================= Activity 1 : - Template Literals ================================= #

// use templates literals to create a string that includes variables for a persons's name and age, and log the string to the console.
let name = "Hariom";
let age = 16;
console.log(`My name is ${name} and I am ${age} years old.`);

// Create a multi-line string using template literals and log it to the console.
let multiLineString = `Hanji, I am back with another day of Javascript challenge. 
Let's dive into ES6 features!`;
console.log(multiLineString);

// # ================================= Activity 2 : - Destructuring ================================= #

// Use array destructuring to extract the first and second element from an array and log them to the console.
let array = [1, 2, 3, 4, 5];
let [first, second, ...rest] = array;
console.log(`First element: ${first}`); 
console.log(`Second element: ${second}`);
console.log(`Rest of the array: ${rest}`);
// console.log(rest[1]);

// Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.

function sum(...numbers) {
    return numbers.reduce((acc,curr)=> acc+curr,0);
}
console.log(`Sum:${sum(1,2,3,4,5)}`);

// # ================================= Activity 3 : - Spread and Rest Operators ================================= #

// Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.

const newArr = [...array,6,7,8];
console.log(`New Array : ${newArr}`);

// Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.

function sumWithRest(...nums){
    return nums.reduce((total,num)=>total+num,0);
}
console.log(`Sum with Rest operator: ${sumWithRest(10,20,30)}`);;

// # ================================= Activity 4 : - Default Parameters ================================= #

// Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.

function multiply(a,b=1) {
    return a*b;
}
console.log(`Multiply with two arguments : ${multiply(5,2)}`);
console.log(`Multiply with one arguments: ${multiply(5)}`);

// # ================================= Activity 5 : - Enhanced Object Literals ================================= #

// Use enhanced object literals to create an object with methods and properties, and log the object to the console.

const title = "Eloquent Javascript";
const author = "Marijn Haverbeke";

const book={
    title,
    author,
    getDetails(){
        return `${this.title} by ${this.author}`;
    }
};

console.log(`Book object:`,book);
console.log(`Book Details :${book.getDetails()}`);

// Create an object with computed property names based on variables and log the object to the console.


const propName = "color";
const propValue = "blue";

const dynamicObject = {
  [propName]: propValue
};
console.log(`Dynamic Object:`, dynamicObject);

