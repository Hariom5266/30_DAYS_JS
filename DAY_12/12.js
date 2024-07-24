// 🍵, Hanji Kaise ho aap sabhi ,This is 12th day of JS Challenge.I’m back and ready to code,Let's roll the code!
// # ================================= ERROR HANDLING ================================= #
// # ================================= Activity 1: Basic Error Handling with try-catch  ================================= #

//Write a fnc that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console.
function throwError() {
    try {
        throw new Error("This is an intentional error.");
    } catch (error) {
        console.log("Caught an error: " + error.message);
    }
}

throwError();

//Create a fnc that divides two numbers and throws an error if the denominator is zero. use a try-catch block to handle this error.
function divide(a, b) {
    try {
        if (b === 0) {
            throw new Error("Cannot divide by zero.");
        }
        return a / b;
    } catch (error) {
        console.log("Error: " + error.message);
    }
}

console.log(divide(10, 2)); // Outputs: 5
console.log(divide(10, 0)); // Outputs: Error: Cannot divide by zero.

// # ================================= Activity 2: Finally Block ================================= #

//Write a script that includes a try-catch block and a finally block and a finally blockd to observe the execution flow.
function tryCatchFinallyDemo() {
    try {
        console.log("In try block");
        throw new Error("An error occurred");
    } catch (error) {
        console.log("Caught an error: " + error.message);
    } finally {
        console.log("Finally block executed");
    }
}

tryCatchFinallyDemo();

// # ================================= Activity 3: Custom Error Objects  ================================= #

//Create a custom error class that extends the built-in error class Throw an instance of this custom error in a fnc and handle it using a try-catch block.
class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "CustomError";
    }
}

function throwError() {
    try {
        throw new CustomError("This is a custom error.");
    } catch (error) {
        console.log("Caught a custom error: " + error.message);
    }
}

throwError();

//Write a fnc that validates user input (e.g, checking if a string is not empty) and throwa a custom error if the validation fails.Hamdle the custom error using a try-catch block.
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

function validateInput(input) {
    try {
        if (!input) {
            throw new ValidationError("Input cannot be empty.");
        }
        console.log("Input is valid.");
    } catch (error) {
        console.log("Caught a validation error: " + error.message);
    }
}

validateInput(""); // Outputs: Caught a validation error: Input cannot be empty.
validateInput("Valid input"); // Outputs: Input is valid.

// # ================================= Activity 4: Error handling in promises  ================================= #

//Create a promise that randomly resolves or rejects. Use.catch() to handle the rejeection and log an appropriate message to the console.
const randomPromise = new Promise((resolve, reject) => {
    const random = Math.random();
    if (random > 0.5) {
        resolve("Promise resolved successfully.");
    } else {
        reject("Promise rejected.");
    }
});

randomPromise
    .then(message => console.log(message))
    .catch(error => console.log("Error: " + error));

//Use try-catch within an async fnc to handle errors from a promise that randomly resolves or rejects, and log the error message.
async function handleRandomPromise() {
    try {
        const result = await randomPromise;
        console.log(result);
    } catch (error) {
        console.log("Caught an error: " + error);
    }
}

handleRandomPromise();

// # ================================= Activity 5: Graceful Error handling in Fetch  ================================= #

//Use the fetch API to request data from an invalid URL and handle the error using.catch().Log an appropriate error message to the console.
fetch('https://invalid.url')
    .then(response => response.json())
    .catch(error => console.log("Fetch error: " + error));

//Use the fetch API to request data from an invalid URL within an async fnc and handle the error using try-catch.Log an appropriate error message.
async function fetchData() {
    try {
        const response = await fetch('https://invalid.url');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("Fetch error: " + error);
    }
}

fetchData();








