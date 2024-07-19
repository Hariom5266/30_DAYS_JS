// 🍵, Hanji Kaise ho aap sabhi I am back ! This is 7th day of JS Challenge.
// # ================================= OBJECTS ================================= #
// # ========================== Objects Creation and Access ========================== #
//Create an object representing a book with properties like title, author, and year, and log the object to the console.
const book = {
    author: "E Balaguru Sumy",
    title: "Object oriented Programming",
    year: "2024"
};
console.log(book);
// Access and log the tittle and author properties of the book object.
console.log(book.author);
console.log(book.title);
// # ========================== Objects Methods ========================== #
//Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.
const book = {
    author: "E Balaguru Sumy",
    title: "Object oriented Programming",
    year: "2024",
    getDetailsOFBook: function () {
        return (`${this.title} by ${this.author}`);
    }
};
console.log(book.getDetailsOFBook());
//Add a method to the book object that takes a parameter(year) and updates the book's year property, then log the updated object.
const book = {
    author: "E Balaguru Sumy",
    title: "Object oriented Programming",
    year: "2024",
    getDetailsOFBook: function () {
        return (`${this.title} by ${this.author}`);
    },
    updateYear: function (year) {
        this.year = year;
    },
    giveTitleAndYear: function () {
        return `${this.title} was published in ${this.year}`
    }
};
book.updateYear(2025);
console.log(book.year);
// # ========================== Nested Objects ========================== #
//Create a nested object reperesenting a library with properties like name and books(an array of book objects), and log the library object to the console.
const libraray = {
    name: "GPJ Library",
    books: [
        { title: "Javascripts: The Good Parts", author: "Douglas Crockford", year: 2008 },
        { title: "Eloquent Javascript", author: "Marjin Haverbeke", year: 2018 },
    ]
};

console.log(libraray);
//Access and log the name of the library and the titles of all books in library.
console.log(libraray.name);
console.log(libraray.books[0].title);
console.log(libraray.books[1].title);
// # ========================== The this Keyword ========================== #
//Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method.
console.log(book.giveTitleAndYear());
// # ========================== Objects Iteration ========================== #
//Use a for...in loop to iterate over the properties of the book object and log each property and its value.
for (const key in book) {
    console.log(`${key}:${book[key]}`);
}
//Use object.keys and object.values method to log all the keys and values of the book object.
console.log("Keys :\n");
Object.keys(book).forEach(key => {
    console.log(key);
})
console.log('\n');
console.log("Values :\n");
Object.values(book).forEach(values => {
    console.log(values);
})
