// 🍵, Hanji Kaise ho aap sabhi ,This is 14th day of JS Challenge.I’m back and ready to code,Let's roll the code!
// # ================================= Classes ================================= #

// # ================================= Activity 1: Class Definition  ================================= #

//Define a class Person with properties name and age, and a method to return a greeting message.Create an instance of the class and log the greeting message.


//Add a method to the Person class that updates the age property and logs the updated age.

class Person{
    constructor(name,age){
        this.name = name;
        this.age=age;
    }
    greeting(){
        return `Hello, my name is ${this.name} and i am ${this.age} year old.`
    }
    updateAge(newAge){
        this.age = newAge;
        console.log(`Updated Age: ${this.age

        }`);
    }
    values(){
        return `${this.name},${this.age}`
    }
}

let person1 = new Person("Hariom Joshi",16)
console.log(person1.greeting());

person1.updateAge(17);
console.log(`Updated Age: ${person1.values()}`);

// # ================================= Activity 2: Class Inheritance ================================= #

//Define a class Student that extends the Person Class.Add a property studentId and a method to return the student ID. Create an instance of the student class and log the student Id.

//Override the greeting method in the student class to include the studentId in the message. Log the overridden greeting message.

class Students extends Person{
    constructor(name,age,studentId){
        super(name,age);
        this.studentId = studentId;
    }
    getStudentId(){
        return `Student ID: ${this.studentId}`;
    }
    greeting(){
        return `Hello, my name is ${this.name}, I am ${this.age} years old, and my student ID is ${this.studentId}.`;
    }
}

let stu1 = new Students("Hariom Joshi",16,"7047");
console.log(stu1.getStudentId());
console.log(stu1.greeting());

// # ================================= Activity 3: Static Methds and Properties  ================================= #
//Add a static method to the person class that returns a generic gretting message.call this static mathod witout creating an instance of the class and log the message.

//Add a static property to the student class ti keep track to the number of student created.increment this property in the constructor and log the total number of students.

class Person{
    constructor(name,age){
        this.name = name;
        this.age=age;
    }
    greeting(){
        return `Hello, my name is ${this.name} and i am ${this.age} year old.`
    }
    updateAge(newAge){
        this.age = newAge;
        console.log(`Updated Age: ${this.age

        }`);
    }
    values(){
        return `${this.name},${this.age}`
    }
    static genericGreeting(){
        return `Hanji, kaise ho app I'm back and ready to code!`;
    }
}

class Students extends Person{
    static studentCount = 0;
    constructor(name,age,studentId){
        super((name,age));
        this.studentId=studentId;
        Students.studentCount++;
        console.log(`Total number of students: ${Students.studentCount}`);
    }
}

console.log(Person.genericGreeting());

let stu2 = new Students("HC JOSHI",17,'7047');
let stu3 = new Students("Hariom C Joshi",19,'7047');

// # ================================= Activity 4: Getters and Setters  ================================= #

//Add a getter method to the person class to return the full name (assume a firtsName and lastName property.).Cr4ate an instance and log the full name using the getter.


//Add a setter method to the Person class to update the name properties (firstName and lastName).Update the name using the setter and log the updated full name.

class Person{
    constructor(firstName,lastName,age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }
    set fullName(name) {
        const [firstName, lastName] = name.split(' ');
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greeting(){
        return `Hello, my name is ${this.name} and i am ${this.age} year old.`
    }
    updateAge(newAge){
        this.age = newAge;
        console.log(`Updated Age: ${this.age

        }`);
    }
    values(){
        return `${this.name},${this.age}`
    }
    static genericGreeting(){
        return `Hanji, kaise ho app I'm back and ready to code!`;
    }
}

let person2 = new Person("HC JOSHI","Full Stack Software Devloper",17);
console.log(person2.fullName);
person2.fullName = 'Hariom Joshi';
console.log(person2.fullName);


// # ================================= Activity 5: Private Fields  ================================= #

//Define a class Account with private fields for balance and a method to deposit and withdraw money.Ensure that the balance can only be updated through these methods.

//Create an instance of the Account class and test the deposit and withdraw methods.logging the balance after each operation.

class Account{
    #balance;

    constructor(initialBalance){
        this.#balance = initialBalance;
    }
    deposit(amount){
        if(amount>0){
            this.#balance+=amount;
            console.log(`Deposited: ₹${amount}. New balance: ₹${this.#balance}`);
        }
    }
    withdraw(amount){
        if(amount>0 && amount<=this.#balance){
            this.#balance-=amount;
            console.log(`Withdrew: ₹${amount}. New balance: ₹${this.#balance}`);
        }else{
            console.log('Insufficient funds or invalid amount.');
        }
    }
    getBalance(){
        return this.#balance;
    }
}

let account1 = new Account(100);
account1.deposit(50);
account1.withdraw(30);
account1.withdraw(150);