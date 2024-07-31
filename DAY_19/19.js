// 🍵, Hanji Kaise ho aap sabhi ,This is 19th day of JS Challenge.I’m back and ready to code,Let's roll the code!

// ======================== Regular Expression ======================== 

// ======================== Activity 1: Basic Regular Expression ========================

//Write a regular expression to match a simple pattern (r.g., match all occurrences of the word "JavaScrip" in a string).Log the matches.
let str1 = "JavaScript is great. I love JavaScript!";
let regex1 = /JavaScript/g;
let matches1 = str1.match(regex1);
console.log(matches1);

//Write a regular expression to match all digits in a string.Log the matches.
let str2 = "My phone number is 1234567890.";
let regex2 = /\d+/g;
let matches2 = str2.match(regex2);
console.log(matches2);

// ======================== Activity 2: Character Classes and Quantifiers ========================

//Write a regular expression to match all words in a string that start with a capital letter.Log the matches
let str3 = "Hello there. How are you doing Today?";
let regex3 = /\b[A-Z][a-z]*\b/g;
let matches3 = str3.match(regex3);
console.log(matches3);

//write a regular expression to match all sequences of one or more digits in a string.Log the matches
let str4 = "There are 123 apples and 4567 bananas.";
let regex4 = /\d+/g;
let matches4 = str4.match(regex4);
console.log(matches4);

// ======================== Activity 3: Grouping and Capturing ========================

//Write a regular expression to capture the area code, central office code, and line number from a US phone number format (e.g., (123) 456-7890).Log the captures.
let phoneStr = "(123) 456-7890";
let phoneRegex = /\((\d{3})\)\s(\d{3})-(\d{4})/;
let phoneMatches = phoneStr.match(phoneRegex);
console.log(phoneMatches);

//Write a regular expression to capture the username and domain from an email address.Log the captures
let emailStr = "user@example.com";
let emailRegex = /(\w+)@(\w+\.\w+)/;
let emailMatches = emailStr.match(emailRegex);
console.log(emailMatches);

// ======================== Activity 4: Assertions and Boundaries ========================

//Write a regular expression to match a word only if it is beginning of a string.Log the matches
let str5 = "Hello world. Hello again.";
let regex5 = /^\w+/;
let matches5 = str5.match(regex5);
console.log(matches5);

//Write a regular expression to match a word only if it is at the end of a string.Log the matches
let str6 = "Welcome to the new world";
let regex6 = /\w+$/;
let matches6 = str6.match(regex6);
console.log(matches6);

// ======================== Activity 5: Practical Applicatiobs ========================

//Write a regular expressions to validate a simple password (must include at least one uppercase letter; one lowercase letter; one digit, and one spcial character).Log wheteher the passsword is valid.
let password = "Password1!";
let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
let isPasswordValid = passwordRegex.test(password);
console.log(isPasswordValid);

//Write a regular expression to validate a URL.Log the whether the URL is valid.
let url = "https://www.example.com";
let urlRegex = /^(https?:\/\/)?(www\.)?[\w-]+\.\w{2,}(\.\w{2,})?([\/\w.-]*)*\/?$/;
let isUrlValid = urlRegex.test(url);
console.log(isUrlValid);

