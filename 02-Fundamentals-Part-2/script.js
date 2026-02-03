/* 
Strict mode has to be first line of code, otherwise it won't work.
Strict mode makes it easier for us to write less buggy code
 1. It forbids us to do certain things 
 2. WIll throw visible errors in the developer console 
 */

'use strict';

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true; // strict mode will log the error to the console
if (hasDriversLicense) console.log('I can drive');

const interface = 'Audio'; //  strict mode shows words that are reserved for the future JS releases
*/

//// FUNCTIONS ////

/*
Fuction is a piece of code we can use over and over again
A function can hold one or more complete lines of code 
*/

/*
function logger() {
  console.log('My name is Mell');
}

// Calling , running, invoking function
logger();
logger();
logger();

// Receive and return data
function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

/* Called foodProcessor function with 2 arguments, values of the function parameter
When the function runs, apples is 5 , oranges is 0, then we use these values to produce juice string
Result of calling function will be juice value that was just returned
This needs to be saved, in this case to the appleJuice variable

Functions are perfect for DRY (Do Not repeat). because they are reusable code blocks that make up the application


const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
// Also possible to directly log juice string
console.log(fruitProcessor(5, 0));

// We can reuse function with different input values
const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');
*/

//// FUNCTION DECLARATIONS VS. EXPRESSIONS

/*
Function Declaration: Using function keyword to declare a function
Function Expression: Storing function in a variable
Function is a value, that's why we can store it in a variable

Difference between the two:
We can call function declarations before they're defined in the code 
 */

// Function declaration to calcualte age based on birthyear

/*
//const age1 = calcAge1(1991);

function calcAge1(birthYear) {
  return 2037 - birthYear;
}

const age1 = calcAge1(1991);

// Function expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const age2 = calcAge2(1991);

console.log(age1, age2);

/* 
Which of these two to use when writing code? Preference 
Function expression forces you to write more structured code, 
because of having to declare function on top of the file 
*/

//// ARROW FUNCTIONS ////

/*
Arrow function is a special form of function expression that is shorter and faster to write
 */

/*
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

// Arrow version: Value will automatically be returned without needing return keyword
// Good for one liner functions
const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

// Longer arrow function
const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  //   return retirement;
  return `${firstName} retires in ${retirement} years.`;
};

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1980, 'Bob'));

// Arrow functions don't get a THIS keyword, will be learned later
*/

//// FUNCTIONS CALLING OTHER FUNCTIONS ////
/*
Calling functions inside another function

Fruit Processor can only make juice with smaller fruit pieces
Need a machiine that will cut the fruits into smaller pieces

Very common for one function to call another 
Good example of DRY
Separate functionalities 
*/

/*
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of oranges.`;
  return juice;
}

console.log(fruitProcessor(2, 3));
*/

//// REVIEWING FUNCTIONS ////

/*
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;
  if (retirement > 0) {
    console.log(`${firstName} has retires in ${retirement} years.`);
    return retirement; // return keywords exits function if condition is true
  } else {
    console.log(`${firstName} has already retired.`);
    return -1;
  }
};

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1950, 'Mike'));
*/

/*
1. Function Declaration: Function can be used before it's declared
2. Function Expression: Essentially a function value stored in a variable
3. Arrow Function: Great for quick one-line functions. Has no THIS keyword
*/

//// CODING CHALLENGE 5 ////

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.

Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).

A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!



Your tasks:

Create an arrow function calcAverage to calculate the average of 3 scores. This function should have three parameters and return a single number (the average score).

Create two new variables — scoreDolphins and scoreKoalas, and assign the value returned from the calcAverage function to them (you will need to call this function, and pass scores as arguments).

Create a function checkWinner that takes the average score of each team as parameters (avgDolphins and avgKoalas), and then logs the winner to the console, together with the victory points, according to the rule above. Example: Koalas win (30 vs. 13) (use avgDolphins and avgKoalas instead of hard-coded values).

Use the checkWinner function to determine the winner for both DATA 1 and DATA 2.

Ignore draws this time. Instead, log No team wins... to the console if there is no winner.



TEST DATA 1: Dolphins scored 44, 23, and 71. Koalas scored 65, 54, and 49.

TEST DATA 2: Dolphins scored 85, 54, and 41. Koalas scored 23, 34, and 27.



👋 OPTIONAL: You can watch my solution in video format in the next lecture
*/

/*
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas * 2) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= avgDolphins * 2) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log(`No team wins...`);
  }
};

scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(checkWinner(scoreDolphins, scoreKoalas));
console.log(checkWinner(576, 111));
*/

//// INTRODUCTION TO ARRAYS ////
/*
Data structure, store friends names in a variable
Array is like a big container into which we can throw variables and alter reference them
2 most important data strutures in JS are Arrays and Objects
*/

/*
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[1]);

console.log(friends.length);
// get last item of the array
console.log(friends[friends.length - 1]);

// Able to change element of array, only primitive values are immutable once declared with const
// Arrays however are mutable, not primive type
friends[2] = 'Jay';
console.log(friends);

// Array with different data types
const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
console.log(jonas);
console.log(jonas.length);

// Exercise
// Array of birthYears, want to calculate the ages for some of them
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const years = [1990, 1967, 2002, 2010, 2018];
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);

console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages);
*/

//// BASIC ARRAY OPERATIONS (METHODS ////

/*
JS has methods: built in functions we can use for arrays
 */

const friends = ['Michael', 'Steven', 'Peter'];

// Push adds elements to the ends of and array
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

// Unshift adds element to the beginnign of an awway
friends.unshift('John');
console.log(friends);

// Pop removes last element of the array
friends.pop();
const popped = friends.pop();
console.log(popped);
console.log(friends);

// Shift removes first element of the array
friends.shift();
console.log(friends);

// Find position of element in array
console.log(friends.indexOf('Steven')); // 1
console.log(friends.indexOf('Bob')); // -1

// ES6 methods, includes, will return true if element is in the array and false if not
friends.push(23);
console.log(friends.includes('Steven')); // true
console.log(friends.includes('Bob')); // false
console.log(friends.includes('23')); // false, no type coersion here, tests for exact value

if (friends.includes('Steven')) {
  console.log('You have a friend called Steven');
}
