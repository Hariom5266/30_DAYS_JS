//higher order fnc -- forEach Method Always Takes Another Fnc inside it , So ForEach is a higher Order fnc.

// function abcd(val){

// }

// abcd(function(){}); // parameter ma fnc ne accept kare or fnc take fnc in argu or return fnc by fnc use in clousers

// var arr = [1,2,3,4,5];
// arr.forEach(function(){}) // it is higher order fnc

// constructor function -- parleG intense
// it run by new keyword
//normal fnc jismein this ka istamal ho and aap use fnc call karte waqt new keyword ka use karein

function saanchOfBiscuit() {
    //this point bydefault window obj
    this.width = 12;
    this.height = 13;
    this.color = "brown";
    this.taste = "sugary";
}

var b1 = new saanchOfBiscuit();
var b2 = new saanchOfBiscuit();
var b3 = new saanchOfBiscuit();

console.log(b1);
console.log(b2);
console.log(b3);

// jab aapke paas aisa koi bhi mauka ho ke apko ek jise properties waale abhut saare elements bannane hai us waqt aap constructor fnc use kar sakte hai

function circularButtonBano(color){
    this.radius = 2;
    this.color = color;
    this.icon = false;
    this.pressable = true;
}

var but1 = new circularButtonBano("red");
var but2 = new circularButtonBano("green");
var but3 = new circularButtonBano("blue");

// first class fnc -- fnc treated as a var

var abcd = function abcd(){}

// new keyword -- jab bhi new lagta hai humesha ek blank object apne man mein bana lo
function abc(){
    this.age = 16;
}

new abc();

// iife =-> immediately invoked fnc expression
// iife hai fnc ko turant chalane ki kala, is tareki se ki ham log private variable bana paye 

var ans = (function(){
    var privateVal = 16;     // it is private variable
    return {
        getter: function(){
            console.log(privateVal);
        },
        setter: function(val){
            privateVal = val;
        }
    };
})(); // it is syntax of iife

ans.getter(); 
ans.setter(13);
ans.getter(); 

// prototype -- it contain many propeties that use to do work or operation on it eg., .legnth on arr
// jitne bhi obj bante hai use prototype property milte hai 

//protottype inheritance
// parents --> child quality

var human = {
    name : "hariom",
    age : "16",
    canFly : false,
    canswim : false,
    canSpeak : true
}

var sheriStu = {
    canMakeAmazingWeb : true,
    cnaMakeAwesomeAnimatio : true,
}

sheriStu.__proto__ = human;
console.log(sheriStu);

// this call apply blind
// this keyword is a special keyword in JS which changes its value in different context

// global scope ma this --> window
// in fnc ma this --> window
// in method scope --> obj

// ek fnc jo obj ke andar ho, use method kahte hai
var obj = {
    baatkaro: function(){
        console.log(this);
    }
}

obj.baatkaro();

// in any method this keyword refer to parent obj
// var btn = document.querySelector("button");
// btn.addEventListener("click" ,function(){
    // console.log(this); //here ths refer to th e btn
// })

//call apply bind =. agar tumare paas koi fnchai and koi obj hai and tumhe fnc chalana hai aur by default jo this ki value window hai use window naa rakh kar point karwana hai kisi obj ki taraf

function abcde(){
    console.log(this);
}

// abcde();

var obj = {age : 16}
abcde.call(obj); //here this become obj
// and also for parameters
function abcde(val1,val2,val3){
    console.log(this);
}

// abcde();

var obj = {age : 16}
abcde.call(obj,13,14,15);

abcde.apply(obj,[1,2,3]) //it is apply method 

//use when fnc me this ki value or hai or or karni hai then it use

var bindedfnc = abcde.bind(obj);

console.log(bindedfnc);

// pure fnc -- this fnc this two this  and not change value of global var

function abcd(val){
    return Math.random()*val;
}

console.log(abcd(2));
console.log(abcd(2));

