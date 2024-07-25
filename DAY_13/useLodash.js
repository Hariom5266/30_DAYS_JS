// useLodash.js
const _ = require('lodash');

const array = [1, 2, 3, 4, 5];
const reversedArray = _.reverse(array.slice()); // slice() to avoid mutating the original array

console.log('Reversed Array:', reversedArray);
