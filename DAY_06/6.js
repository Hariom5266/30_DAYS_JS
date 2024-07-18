// 🍵, Hanji Kaise ho aap sabhi I am back ! This is 6th day of JS Challebge.

// # ================================= ARRAYS ================================= #

// # ========================== Array Creation And Access ========================== #

//Create an array of numbers from 1 to 5 and log the array to the console.
let numbers = [1,2,3,4,5];
console.log(numbers);

//Access the first and last elements of the array and log them to the console.
first_elem = numbers[0];
last_elem = numbers[numbers.length-1];
console.log(first_elem);
console.log(last_elem);

// # ========================== Array Mrthods========================== #

//Use the push method to add a new number to end of the array and log the updated array.
numbers.push(6);
console.log(numbers);

//use the pop method to remove the last element from the array and log the updated array
numbers.pop();
console.log(numbers);

//use the shift method to remove the first element from the array and log the updated array.
numbers.shift();
console.log(numbers);

//use the unshift method to add a new number to the beginning of the array and log the updated array
numbers.unshift(1);
console.log(numbers);
// # ========================== Array Iteration ========================== #

//use a for loop to iterate over the array and log each element to console.
for (let index = 0; index < numbers.length; index++) {
    console.log(numbers[index]);
}

//use the forEach method to iterate over the array and log each element to the console
numbers.forEach(element => {
    console.log(element);
});
// # ========================== Multi-dimensional Array  ========================== #

//create a two dimensional array and log the entire array to the console.
let multiDimension = [[1,2,3],[4,5,6]];
console.log(multiDimension);

//Access and log a specific element from the two-dimensional array.
function sawMultiDimensionArray(array,index1,index2) {
    console.log(array[index1][index2]);
}

sawMultiDimensionArray(multiDimension,1,2);


