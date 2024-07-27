// 🍵, Hanji Kaise ho aap sabhi ,This is 15th day of JS Challenge.I’m back and ready to code,Let's roll the code!
// # ================================= Closures ================================= #

// # ================================= Activity 1: Understanding Closures  ================================= #

//Write a fnc that returns another function, where the inner fnc accesses a variable from the outer fnc's scope. Call the inner fnc and log the result.
function outerFunction(){
    let outerVar = 'I am  from outer scope!';

    function innerFunction(){
        console.log(outerVar);
    }
    return innerFunction;
}

const closureFunction = outerFunction();
closureFunction();

//Create a closure that maintains a private counter, implement fnc to increment and get the current value of the counter.

function counter(){
    let counter = 0;
    return{
        increment:function(){
            counter++;
        },
        getcounter:function(){
            return counter;
        }
    };
}

const count = counter();
count.increment();
count.increment();
console.log(count.getcounter());

// # ================================= Activity 2: Practical Closures  ================================= #

//Write a fnc that generates unique IDs. Use a clousre to keep track of the last generated ID and increment it with each call

function idGenerator(params) {
    let lastID = 0;
    return function(){
        lastID++;
        return lastID;
    };
}

const generateId=idGenerator();
console.log(generateId());
console.log(generateId());
console.log(generateId());

// # ================================= Activity 3: Closures in loops  ================================= #

//Write a loop that creates an array of fnc. Each fnc should log its index when called. Use a closure to ensure each fnc logs the correct index.

function createFunctions() {
    let functions = [];
    
    for (let i = 0; i < 5; i++) {
        functions.push((function(index) {
            return function() {
                console.log(index);
            };
        })(i));
    }
    
    return functions;
}

const fncArr = createFunctions();
fncArr[0]();
fncArr[1]();
fncArr[2]();
fncArr[3]();
fncArr[4]();

// # ================================= Activity 4: Module Pattern ================================= #

//Use closures to create a simple module for managing a collection of item.Implement method to add,,remove, and list items.

const itemManager = (function(){
    let items = [];
    return{
        addItem:function(item){
            items.push(item);
        },
        removeItem:function(item){
            const index = item.indexOf(item);
            if (index>-1){
                items.splice(index,1);
            }
        },
        listItems:function(){
            return items;
        }
    };
})();

itemManager.addItem('iphone');
itemManager.addItem('mac book m3 chip pro');
console.log(itemManager.listItems());
itemManager.removeItem('iphone');
console.log(itemManager.listItems());

// # ================================= Activity 5: Memoization  ================================= #

//Write a fnc that memoizes the results of another fnc. Use a closure to store the result of provide computatins.

function memoize(fn){
    const cache = [];
    return function(...args){
        const key = JSON.stringify(args);
        if(cache[key]){
            // console.log('From cache');
            return cache[key];
        }
        const result = fn(...args);
        cache[key] = result;
      return result;
    };
}

//Create a memoized version of a fnc that calculates the factorial of a number.
function factorial(n){
    if(n<=1){
        return 1;
    }
    return n*factorial(n-1);
}

const memoizedFactorial = memoize(factorial);
console.log(memoizedFactorial(5));
console.log(memoizedFactorial(5)); //logs:120, retrieved from cache
console.log(memoizedFactorial(6));





