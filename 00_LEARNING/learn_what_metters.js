//hoisting - variable and functions are hoisted which means their declaration is moved on the top off of code

console.log(a);
var a = 13;
console.log(a);


//undefined and not defined is differ things

console.log(b); // it is not defined

// types in js
//primitive and reference

// primitive = number , string, null , undefined , boolean
// refernce = [] () {}
//aisi koi bhi value jisko copy karne par real copy nahi hota , balki us main value ka reference pass hojata hai , use hum reference value kahte hai , aur jiska copy karne par real copy ho jaaye wo value primitive type value hotti hai

// var a = 12;
// var b = a;

// b=b+2;

// var a = [1,2,3,4,5];
// var b = a;
// b.pop();
// console.log(b);
// console.log(a);

// conditional - if else else-if

// loops - for , while -- means repeat --- dont make program complex

// functions -- code ne future ma hakvo chhe tayare , jayare reuse karvo chhe tyare , jayre different data sathe code ne chalavavo chhe

// arrrays 
// push pop shift and unshift

var arr = [1,2,3,4,5];
arr.push(8);
console.log(arr);
arr.pop();
console.log(arr);
arr.unshift(13);
console.log(arr);
arr.shift();
console.log(arr);
arr.splice(2,1);
console.log(arr);

// objects -- ek se jaade bande ki baate ki to array but ek bande ke baare me saari baat ki to hua object
// blank obj, 

