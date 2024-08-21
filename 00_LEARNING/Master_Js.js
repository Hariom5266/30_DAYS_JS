// the difference 
// var let const
// var old js mein tha
// let const new js mein aa gaya
// var function scoped hota hai
// let braces scoped hota hai

function abcd(){
    for (var i = 0; i < 14; i++) {
        console.log(i);
    }
    console.log(i);
}

abcd();

// var adds itself to the window object
// let dosent adds

// js ma thodik vastu nathi je apde use kariye chiyye je apde browser ape chhe aise sare feature je js no bhag nathi jene apde window object ma sodhi sak ye chhiye

// alert , prompt , console , print

// browser contect api
// window stack heap -- its given by browser
// stack how thing walk jem ave tem nikale
// heap memory - data je banavye tene store karvo pade tena  mate heap memory hoy chhe -- use for calculation intermediate answer ex 1+2+3+4+5

// execution context -- matlab jab bhi hum func chalaye je to fnc khudka ek imag container banaye ja jisme teen chije hnogi
// 1. variable , 2. functions inside that parent fnc , 3. lexical encironmetn of that fnc
// it container called execution context

// lexical environment - kene use kari skay and ko ne excess n kari sakay , scope and scope chain

// how to copy reference value

var a = [1,2,3,4,5];
var b = [...a];//... -- it is spred operator or it copy thing
b.pop();
console.log(a);
console.log(b);

var obj = {
    name : "hariom",
}

var copyobj = {...obj};
console.log(obj);
console.log(copyobj);

// js mein kuch bhi lkho wo mainly do parkar mein se kisi ek parkaar ko belong karti hai
// hariom -- ya to truthy or false
// 13 -- ya to truthy or falsey
// falsy values -- 0 false undefined null NaN document.all

// for each for in do-while
// for each only on array

var a = [1,2,3,4,5,6,7,8,9,8,7,6,5,4,3,2,1];
a.forEach(function(val){
    console.log(val+2);
})

a.forEach(function(member){
    console.log(member + 10);
})

// foreach kabhi bhi by default array mein change nahi 

// forin -- objects par loop karne ke liye hota hai forin loop

var obj = {
    name : "hariom",
    age : 16,
    city : "Jamanagr"
}

for(var key in obj){
    // console.log(key);
    // console.log(obj[key]);
    console.log(key,obj[key]);
}

// do-while

// callback fnc
// jab bhi koi aisa code jo baad me chalta hai aap likhoge , kyuki wo code baad mein chalta hai js ko ye pata nahi hota ke wo complete hua ya nahi, aisa code ke completen par js ko btaya jaata hai ke wo complete hogya aur aap use chala sakte ho, ye bataane ka kaam callback ka hai 

// get fb ---> fb take image

setTimeout(function () {
    console.log("2 second baad Chalau");
},2000); // it value in milisecond 

// first class fnc
// js mein ek concept hi jiska matlab hai ki aap fnc ko use kar sakte ho as a value

function hari(a){
    a();
}

hari(function(){console.log("Hello I Am HC JOSHI GOAT Frontend Devloper");})

var arr = [1,2,3];
// arr = {
//     0:1,
//     1:2,
//     2:3,
// }
arr[-1] = 13
console.log(typeof arr);
console.log(arr);

console.log(Array.isArray(arr));

var a = {
    name : "hariom",
    age:16
}

delete a.age;

console.log(a);







