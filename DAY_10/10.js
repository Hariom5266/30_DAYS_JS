// 🍵, Hanji Kaise ho aap sabhi ,This is 10th day of JS Challenge.I’m back and ready to code!

// # ================================= EVENT HANDLING ================================= #

// # ================================= Activity 1 : Basic Event Handling ================================= #
//Add a click event listener to a button that changes the text content of a paragraph.

let btn = document.querySelector(".changeTextbtn");
btn.addEventListener('click',function(){
    document.querySelector('.changeText1').textContent = `Text has been changed. I'm back and ready to code`
});

//Add a double-click event listener to an image that toggles its visibility.
document.querySelector('#toggleVisibilityOfImg').addEventListener('dblclick', function() {
    this.style.display = 'none';
});

// # ================================= Activity 2 : Mouse Events ================================= #

//Add a mouseover event listener to an element that changes its background color.
document.querySelector('.changeBackcolorElement').addEventListener('mouseover',function(){
    this.style.backgroundColor = 'yellow';
    this.style.transition="1s";
});

//Add a mouseout event listener to an element that resets its background color.

document.querySelector('.changeBackcolorElement').addEventListener('mouseout',function(){
    this.style.backgroundColor = "aqua";
    this.style.transition="0.7s";
});

// # ================================= Activity 3 : Keyboard Events ================================= #

//Add a keydown event listener to an input field that logs the key pressed to the console.
document.querySelector('.keyBoardKeyDown').addEventListener('keydown',function(){
    console.log('Key pressed:',event.key);
});

//Add a keyup event listener to an input field that displays the current valuse in a paragrah.
document.querySelector('.keyBoardKeyDown').addEventListener('keyup',function(){
    document.querySelector('.keyBoardKeyUp').textContent = this.value;
});

// # ================================= Activity 4 : Form Events ================================= #

//Add a submit event listener to a form that prevents the default submission and log the form data to the console.
document.querySelector('#submitEvent').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Log form data to the console
    const formData = new FormData(this);
    formData.forEach((value, key) => {
        console.log(`${key}: ${value}`);
    });
});

//Add a change event listener to a select dropdown that displays the selected value in a paragraph.
document.querySelector('#dropdown').addEventListener('change', function() {
    const dropdownValue = this.value;
    document.getElementById('dropdownOutput').textContent = 'Selected: ' + dropdownValue;
});

// # ================================= Activity 5 : Events  Delegation ================================= #

//Add a click event listener to a list that log the text content of the clicked list item using event delegation.
document.querySelector('#evenlistenerToList').addEventListener('click', function(event) {
    if(event.target.tagName === 'LI') {
        console.log('List item clicked:', event.target.textContent);
    }
});

//Add an event listener to a parent element that listens for events from dynamically added child elements.
document.getElementById('addElementBtn').addEventListener('click', function() {
    const newElement = document.createElement('div');
    newElement.textContent = 'New Child Element';
    newElement.className = 'childElement';
    document.getElementById('parentElement').appendChild(newElement);
});

document.getElementById('parentElement').addEventListener('click',function(event){
    if(event.target.classList.contains('childElement')){
        console.log('Dynamically added child element clicked:',event.target.textContent);
    }
});





 













