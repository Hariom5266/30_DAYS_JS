// person.js
const person = {
    name: 'Hariom Joshi',
    age: 16,
    greet() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  };
  
  module.exports = person;
  