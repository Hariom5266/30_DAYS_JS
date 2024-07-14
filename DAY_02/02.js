// 🍵 Hajji , This is Second Day of 30 Days JS Challenge

// ============== ACTIVITY 1 -- ARITHMETIC OPERATORS ============== //

// TWO NUMBERS ADD AND LOG RESULT
let number1 = 13;
let number2 = 17;
let sum = number1 + number2;
console.log(sum);

// SUBTRACT TWO NUMBERS
let no1 = 171717;
let no2 = 131313;
let sub = no1 - no2;
console.log(sub);

// MULTIPLY TWO NUMBERS
let numM = 13;
let numm = 13;
console.log(numM * numm);

// REMAINDER
let divNum1 = 169;
let divNum2 = 12;
let remainder = divNum1 % divNum2;
console.log(remainder);

// ============== ACTIVITY 2 -- ASSIGNMENT OPERATORS ============== //
let num1 = 13;
let num2 = 20;
num1 += num2;
console.log(num1);
console.log(num2);

let sub1 = 50;
let sub2 = 75;
sub2 -= sub1;
console.log(sub2);
console.log(sub1);

// ============== ACTIVITY 3 -- COMPARISON OPERATORS ============== //
let max1 = 16;
let max2 = 1456;

if (max1 > max2) {
    console.log(`${max1} is greater than ${max2}`);
} else {
    console.log(`${max2} is greater than ${max1}`);
}

if (max1 < max2) {
    console.log(`${max1} is less than ${max2}`);
} else {
    console.log(`${max2} is less than ${max1}`);
}

if (max1 >= max2) {
    console.log(`${max1} is greater than or equal to ${max2}`);
} else {
    console.log(`${max2} is greater than or equal to ${max1}`);
}

if (max1 <= max2) {
    console.log(`${max1} is less than or equal to ${max2}`);
} else {
    console.log(`${max2} is less than or equal to ${max1}`);
}

if (max1 == max2) {
    console.log(`${max1} is equal to ${max2}`);
} else {
    console.log(`${max1} is not equal to ${max2}`);
}

if (max1 === max2) {
    console.log(`${max1} is strictly equal to ${max2}`);
} else {
    console.log(`${max1} is not strictly equal to ${max2}`);
}

// # ============== ACTIVITY 4 -- LOGICAL OPERATORS ============== #

let age = 106;

if(age > 18 && age < 65){
    console.log("You are able to do vote.");
}else{
    console.log("You are not able to do vote.");
}

if(age > 18 || age == 18){
    console.log('You can drive.');
}else{
    console.log('You cant drive.');
}

let temprature = 33;
if(!(temprature > 30)){
    console.log("temprature less than 30");
}else{
    console.log("temprature greater than 30");
}

let ternaryNum = 0;

(ternaryNum >= 0) ? console.log('positive') : console.log('negative');