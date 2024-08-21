// what is DOM -- Document Object Model
// 4 pillar of DOM :
// 1. Selection of an Element
// 2. changing HTML
// 3.Changing CSS
// 4. Event Listener

// var a = document.querySelector("h1");
// console.log(a);
a.innerHTML = "Hi , I am HC JOSHI GOAT Frontend Devloper";
a.style.color = "red";
a.style.backgroundColor = "black";

// Event Listener -- somethin which happining or observe karne wala

a.addEventListener("click",function(){
    // console.log("hey");
    a.innerHTML = "I Get Full Stack Devloper at Google ";
})

var bulb = document.querySelector(".bulb");
var btn = document.querySelector("button");

var flag = 0;

btn.addEventListener("click",function(){
    if(flag == 0){
        bulb.style.backgroundColor = "yellow";
        // console.log(clickkod);
        flag = 1;
    }else{
        bulb.style.backgroundColor = "transparent";
        flag = 0;
    }
})

 var h = document.querySelectorAll("h1") //select whole hw
 console.log(h);

 h.forEach(function(e){
    console.log(e.textContent);
 });

document.getElementById("box");
document.getElementsByClassName("box2");

