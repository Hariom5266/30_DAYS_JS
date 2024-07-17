// 🍵 , Hanji Kaise ho aap sabhi this is 5th day of JS Challenge

// # ============================ FUNCTION ================================ #

// # =============== ACTIVITY : 1 -- FUNCTION DECLARATION =============== #

//Write a function to check if a number is even or odd and log the result to the console.
function numWheter(num) {
    if (num % 2 == 0) {
        console.log(`${num} is Even.`);
    } else {
        console.log(`${num} is Odd.`);
    }
}

numWheter(13);
numWheter(14);

//Write a fnc to calcu the square of a num and return the result.
function sqrOfNum(num) {
    return num * num;
}

console.log(sqrOfNum(13));


// # =============== ACTIVITY : 3 -- FUNCTION EXPRESSION =============== #

//Write a fnc expression to find the max of two numbers and log the result to the console.
const findMax = function (num1, num2) {
    if (num1 > num2) {
        console.log(`${num1} is greater than ${num2}`);
    } else if (num2 > num1) {
        console.log(`${num2} is greater than ${num1}`);
    } else {
        console.log(`${num1} and ${num2} both are equal`);
    }
}

findMax(120, 13);
findMax(13, 17)
findMax(9, 9)


//Write a fnc expression to concatenate two strings and return the result.
const concateTwoStr = function (str1, str2) {
    return str1 + " " + str2;
}

console.log(concateTwoStr("hari", "om"));
console.log(concateTwoStr("#5thDays", "OfJSchallenge"));

// # =============== ACTIVITY : 3 -- ARROW FUNCTIONS  =============== #

//write an arrow function to calculate the sum of two numbers and return the result.
const sum = (a, b) => a + b;
console.log(sum(13, 14));

//write an arrow function check if a string contains a specific character and return a bolean value.
const checkStr = (str, char) => str.includes(char);

console.log(checkStr("h@ri0m", "@"));
console.log(checkStr("hari0m", "@"));

// # =============== ACTIVITY : 4 -- FUNCTION PARAMETERS AND DEFAULT VALUES =============== #

//write a fnc that takes two parameters and returns their product. Provide a default value for the second parameter.
function multi(num1, num2 = 1) {
    return num1 * num2;
}
console.log(multi(13, 2));
console.log(multi(17));

//Write a fnc that takes a person's name and age and returns a greeting message. Provide a default value for the age.
function greet(name, age = "age") {
    if (age != "age") {
        console.log(`Hello, ${name} and good job for start #30DayJSChallenge start at ${age}.`);
    } else {
        console.log(`Hello, ${name} and good job for start #30DayJSChallenge start at this ${age}.`);
    }
}

greet("hariom", 16);
greet("hari")

// # =============== ACTIVITY : 5 -- HIGHER ORDER FUNCTION =============== #

//write a higher-order fnc that takes a fnc and a number, and calls the fnc that many times.
function hello(fn, number) {
    for (let index = 0; index < number; index++) {
        fn();
    }
}

hello(()=>console.log("Hello World"),5);

//write a higher-order fnc that takes two fnc and a values, applies the first fnc to the value, and then applies to the result.
function applyfirstOnSecond(fnc1,fnc2,val) {
    return fnc2(fnc1(val));
}

const addOne = num => num + 1;
const sqrNum = num => num*num;

console.log(applyfirstOnSecond(addOne,sqrNum,5));
    
