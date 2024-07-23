// 🍵, Hanji Kaise ho aap sabhi ,This is 11th day of JS Challenge.I’m back and ready to code,Let's roll the code!
// # ================================= PROMISES AND ASYNC/AWAIT ================================= #
// # ================================= Activity 1: Understanding Promises ================================= #
//Create a promise that provides with a message after a 2-second timeout and log the message to the console.
function createResolvedPromise() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve("Hello from the resolved promise!");
        }, 2000);
    });
}
createResolvedPromise().then(function(message) {
    console.log(message);
});

//Create a promise that rejects with an error message after a 2-second timeout and handle the error using .catch().
function createRejectedPromise() {
    return new Promise(function(_, reject) {
        setTimeout(function() {
            reject("Error from the rejected promise!");
        }, 2000);
    });
}
createRejectedPromise().catch(function(error) {
    console.error(error);
});

// # ================================= Activity 2: Chaining Promises ================================= #
//Create a sequence of promises that simulate a fetching data from a server.Chain the promises to log messages in a specific order.
function fetchData() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve("Data fetched!");
        }, 1000);
    });
}

function processData(data) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve(data + " Processed!");
        }, 1000);
    });
}

fetchData()
    .then(function(data) {
        console.log(data);
        return processData(data);
    })
    .then(function(processedData) {
        console.log(processedData);
    });

// # ================================= Activity 3: Using Async/Await ================================= #
//Write an async fnc that waits for a promise to resolve and then logs the resolved value.
function getMessage() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve("Message from async function!");
        }, 2000);
    });
}

async function logMessage() {
    const message = await getMessage();
    console.log(message);
}

logMessage();
//write an async fnc that hadles a rejected promise using try-catch and logs the error message.
function getErrorMessage() {
    return new Promise(function(_, reject) {
        setTimeout(function() {
            reject("Error from async function!");
        }, 2000);
    });
}

async function logError() {
    try {
        const message = await getErrorMessage();
        console.log(message);
    } catch (error) {
        console.error(error);
    }
}

logError();

// # ================================= Activity 4: Fetching Data from an API ================================= #
//Use the fetch API to get data from a public API and log the response data to the console using promises.
const url = 'https://jsonplaceholder.typicode.com/posts/1';  // The API URL

async function fetchApiData() {
    try {
        const response = await fetch(url);
        
        // Check if the response is OK (status code 200-299)
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        // Parse the JSON data from the response
        const data = await response.json();
        console.log(data);  // Log the data to the console
    } catch (error) {
        // Log any errors that occur
        console.error("Error fetching data:", error);
    }
}

// Call the function to fetch and log the data
fetchApiData();


//Use the fetch API to get data from a public API and log the response data to the console using async/await.
async function fetchApiData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

fetchApiData();

// # ================================= Activity 5: Concurrent Promises ================================= #
//Use Promise.all to wait for the multiple promises to resolve and then log their values.
function promiseOne() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve("First promise resolved");
        }, 1000);
    });
}
function promiseTwo() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve("Second promise resolved");
        }, 1500);
    });
}
Promise.all([promiseOne(), promiseTwo()])
    .then(function(values) {
        console.log(values);
    })
    .catch(function(error) {
        console.error("Error with Promise.all:", error);
    });

//Use promise.race to log the value of the first promise that resolves among multiple promises.
function promiseOne() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve("First promise resolved");
        }, 1000);
    });
}

function promiseTwo() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve("Second promise resolved");
        }, 1500);
    });
}

Promise.race([promiseOne(), promiseTwo()])
    .then(function(value) {
        console.log(value);
    })
    .catch(function(error) {
        console.error("Error with Promise.race:", error);
    });

    