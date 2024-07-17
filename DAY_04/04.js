// 🍵 , Hanji Kaise ho aap sabhi this is 4th day of JS Challenge

// # ============================ Loop ================================ #

// # =============== ACTIVITY : 1 -- FOR LOOP =============== #

//WRITE A PROGRAM TO PRINT NUMBERS FROM 1 TO 10 USING A FOR LOOP.
for (let index = 1; index <= 10; index++) {
    console.log(index);    
}

//WRITE A PROGRAM TO PRINT THE MULTIPLICATION TABLE OF 5 USING A FOR LOOP.
for (let index = 1; index <= 10; index++) {
    console.log(`${index} * 5 = ${index * 5}`);    
}

// # =============== ACTIVITY : 2 -- WHILE LOOP =============== #

// WRITE A PROGRAM TO CALCULATE THE SUM OF NUMBERS FROM 1 TO 10 USING A WHILE LOOP.
let sum = 0;
for (let index = 1; index <= 10; index++) {
    sum+=index;
}
console.log(sum);


//WRITE A PROGRAM TO PRINT NUMBERS FROM 10 TO 1 USING A WHILE LOOP.
let index = 10
while (index > 0) {
    console.log(index);
    index--;
}

// # =============== ACTIVITY : 3 -- DO-WHILE LOOP =============== #

//WRITE A PROGRAM TO PRINT NUMBERS FROM 1 TO 5 USING DO..WHILE LOOP.
index = 1;
do{
    console.log(index);
    index++;
}while(index <= 5);

//WRITE A PROGRAM TO CALCU THE FACTORIAL OF A NUMBER USING DO...WHILE LOOP.
let fact = 1;
let i = 6;
do{
    fact *=i;
    i--;
}while(i>0);
console.log(fact);

// # =============== ACTIVITY : 4 -- NESTED FOR LOOP =============== #

//WRITE A PROGRAM A PATTERN TO PRINT USING FOR LOOPS :
// *
// **
// ***
// ****
// *****

for (let row = 1; row <= 5; row++) {
    let stars = ''; // Initialize an empty string to store the stars
    for (let col = 1; col <= row; col++) {
        stars += '*'; // Append a star to the string
    }
    console.log(stars); // Print the row of stars
}


// # =============== ACTIVITY : 5 -- LOOP CONTROL STATMENTS =============== #

//WRITE A PROGRAM TO PRINT NUMBERS FROM 1 TO 10, BUT SKIP THE NUMBER 5 USING THE CONTROL STATMENT.
index = 1;
while (index <= 10) {
 if(index != 5 ){
     console.log(index);
 }   
index++;
}

//WRITE A PROGRAM TO PRINT NUMBERS FROM 1 TO 10, BUT STOP THE LOOP WHEN THE NUMBERS IS 7 USING THE BREAK STATEMENTS.

for (let index = 1; index <= 10; index++) {
    if(index == 7)    {
        break;
    }else{
        console.log(index);
    }
}

