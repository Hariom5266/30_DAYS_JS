// 🍵, Hanji Kaise ho aap sabhi I am back ! This is 9th day of JS Challenge.I’m back and ready to code!

// # ================================= DOM MANIPULATION ================================= #

// # ================================= Activity 1 : Selecting and Manipuling Elements ================================= #

//select an html element by its ID and change its text content.
document.getElementById('elementID').textContent = `🍵, Hanji Kaise ho aap sabhi I am back ! This is 9th day of JS Challenge.I’m back and ready to code!
`;

//select an html element by its class and change its background color.
document.querySelector('.elementClass').style.backgroundColor = '#ffe4c4';

// # ================================= Activity 2 : Creating and Appending Element ================================= #

//Create a new div element with some text content and append it to the body.
const newDiv = document.createElement('div');
newDiv.textContent = 'This is a 9th day of JS Challenege and I am back and ready to code'
document.body.appendChild(newDiv);

//Create a new li element and add it to an existing ul list.
const newLi = document.createElement('li');
newLi.textContent = 'List3';
document.querySelector('ul').appendChild(newLi);

// # ================================= Activity 3 : Removing Element ================================= #

//Select an HTML element and remove it from the element.
const elementToRemove = document.querySelector('.removeit');
elementToRemove.parentNode.removeChild(elementToRemove);

//remove as the last child of specific html element.
document.addEventListener('DOMContentLoaded', function() {
    let elementToRemove = document.querySelector('.parentClass');
    elementToRemove.removeChild(elementToRemove.lastElementChild);
});

// # ================================= Activity 4 : Modifying Attributes and Classes  ================================= #

//Select an html element and change one of its attributes (eg., src of an img tag).
let img = document.querySelector(".changeImg");
img.setAttribute('src','9.2.png')

//add and remove a css class to an html element.
let parentID = document.querySelector('#tempID');
parentID.classList.add('newClass');
parentID.textContent="I m a new class."
parentID.classList.remove('tempClass2')

// # ================================= Activity 5 :Event Handling ================================= #

//Add a click event listener to a button that changes the text of a paragraph.
document.querySelector('button').addEventListener('click', function() {
    document.querySelector('.aboutMe').textContent = 'Paragraph text changed!';
});

// Add a mouseover event listener to an element that chnages its border color.
const element = document.querySelector('.hoverable');

element.addEventListener('mouseover', function() {
    this.style.backgroundColor = 'lightblue';
});

element.addEventListener('mouseout', function() {
    this.style.backgroundColor = 'white';
});






