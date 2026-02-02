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

/*
1. Function Declaration: Function can be used before it's declared
2. Function Expression: Essentially a function value stored in a variable
3. Arrow Function: Great for quick one-line functions. Has no THIS keyword
*/
