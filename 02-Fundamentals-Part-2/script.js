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
*/

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
// Also possible to directly log juice string
console.log(fruitProcessor(5, 0));

// We can reuse function with different input values
const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');
