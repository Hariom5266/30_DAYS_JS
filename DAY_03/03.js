// 🍵 , This is Third Day Practice of 30 Days challenge #30DaysOfJs , Complete 3rd Day of JS

// # =============  ACTIVITY -- 1 : IF - ELSE STATEMENTS ============= #

// Write a Program to check if a number is positive, negative or zero, and log the result to the console.

let number = 13;

if (number > 0) {
    console.log(number + " is a Positive.");
} else if (number === 0) {
    console.log(number + " is a Zero.");
} else {
    console.log(number + " is a Negative.");
}

//write a program to check if a person eligible to vote and log the result to the console

let age = 18;

if (age >= 18) {
    console.log("You are eligible for voteing.");
} else {
    console.log("You are not eligible for voteing.");
}


// # =============  ACTIVITY -- 2 : NESTED  IF - ELSE STATEMENTS ============= #

//write a program to find the largest of the three numbers using neted if else if statments.

let num1 = 103;
let num2 = 1007;
let num3 = 57;

if (num1 > num2) {
    if (num1 > num3) {
        console.log(num1 + " is largest among " + num2 + " and " + num3);
    } else {
        console.log(num3 + " is largest among " + num1 + " and " + num2);
    }
} else {
    if (num2 > num3) {
        console.log(num2 + " is largest among " + num1 + " and " + num3);
    } else {
        console.log(num3 + " is largest among " + num1 + " and " + num2);
    }
}

// # =============  ACTIVITY -- 3 : SWITCH CASE ============= #

//write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to console.

let dayOfWeek = 5;

switch (dayOfWeek) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("Enter valid number Bcz, days are 1 - 7");
        break;
}

//write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D','F') based on a score and logthe gard to the console.

let marks = 99;
let grade;

switch (true) {
    case (marks >= 90 && marks <= 100):
        grade = 'A';
        break;
    case (marks >= 80 && marks < 90):
        grade = 'B';
        break;
    case (marks >= 70 && marks < 80):
        grade = 'C';
        break;
    case (marks >= 60 && marks < 70):
        grade = 'D';
        break;
    case (marks >= 0 && marks < 60):
        grade = 'F';
        break;
    default:
        grade = "Invalid Marks ! Enter Marks between 0 to 100";
        break;
}

console.log(grade);

// # =============  ACTIVITY -- 4 : TERNARY OPERATOR ============= #

//write a progarm that check number is even or odd using ternay operator

let num = 13;
(num % 2 == 0) ? console.log(num + " is Even."):console.log(num + " is Odd.");

// write a programe to check if  a year is a leap using multiple conditins (divisible by 4 , but not 100 unless also divisible by 400) and log the result to the console.

let year = 2023;

if((year % 4 === 0 && year % 100 != 0) || (year % 400 === 0)){
    console.log(year + " is a leap year.");
}else{
    console.log(year + " is not leap year.");
}

