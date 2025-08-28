/* JS code in its own file --> Better separation of concern between presentation and logic */

/* let js = 'amazing';
console.log(40 + 8 + 23 - 10);

//// VALUES ////

// Value is a piece of data, smallest unit of information
console.log('Mell');
console.log(23);

// Declare a variable and store value inside. camelCase convention
let firstName = 'Manon';
let first = 'Mell';
let firstNamePerson;

console.log(firstName);
console.log(firstName);


Conventions for variable names

- camelCase 'let firstName = 'M' '
- No special charactes 'let m&m = 3'
- No numbers
- Upper case ist for OOP 'let Person = 'M' '
- Descriptive names 'myFirstJob, myCurrentJob' instead of 'job2, job2'

*/

//// DATA TYPES ////

/* 

Every value is an object or primitive type

 7 PRIMITIVE DATA TYPES
 1. Number: Floating point numbers, used for decimal or integers: let num = 3
 2. String: Sequence of characters, used for text: let name = 'Mell'
 3. Boolean: Logical type that can only be true or false, used for taking decisions: let fullAge = true
 4. Undefined: Values taken by a variable not yet defined (empty value): let children
 5. Null: Also means empty value
 6. Symbol: Value that is unique and cannot be changed 
 7. BigInt: Larger integers than the number type can hold



let javaScriptIsFun = true;
console.log(javaScriptIsFun);
console.log(typeof true);
console.log(typeof javaScriptIsFun);
console.log(typeof 23);
console.log('Mell');

// Reassign variable
javaScriptIsFun = 'YES!';
console.log(typeof javaScriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

// JS bug: returns object, but should return null
console.log(typeof null);

*/

//// LET, CONST, AND VAR ////

/* 

Let and Const are ES6, and Var is the old way of defining a variable


let age = 30;
age = 31;

// Cannot reassign const value
const birthYear = 1991;
birthYear = 1990;

// Legacy
var job = 'programmer';
job = 'teacher';

// Also possible to omit keyword, but in this case JS creates a property on the global object
lastName = 'Miller';
console.log(lastName);

*/

//// BASIC OPERATORS ////

/*

// AARITHMETIC OPERATORS
const now = 2037;
const ageMell = now - 1990;
const ageSarah = now - 2018;
console.log(ageMell, ageSarah);

console.log(ageMell * 2, ageMell / 10, 2 ** 3);

const firstName = 'Sam';
const lastName = 'Miller';
console.log(firstName + ' ' + lastName); // Sam Miller

// ASSIGNMENT OPERATORS
// 2 operatos, * and =
let x = 10 + 5; // 15
x += 10; // x = x + 10
console.log(x); // 25
x *= 4; // x * 4
console.log(x); // 100
x++; // x = x + 1
console.log(x); // 101
x--; // x = x - 1
console.log(x); // 100

// COMPARISON OPERATORS
console.log(ageMell > ageSarah); // > , <, >=, <=
console.log(ageSarah >= 18); // true

const isFullAge = ageSarah >= 18;

// Operation DOES NOT proceed from left to right
console.log(now - 1990 > now - 2018);
*/

//// OPERATOR PRECEDENCE ////

/*
const now = 2037;
const ageMell = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5; // Math operator (right to left) takes precedence over the equality operator
console.log(x, y); // 10 10

const averageAge = (ageMell + ageSarah) / 2; // Parenthesis gives precedence to addition
console.log(ageMell, ageSarah, averageAge);

/* 
JS has a defined order or operator precedence, check table at MDN docs

Math operators higher precedence than comparison operators 

*/

//// CODING CHALLENGE 1 🙂 ////

/* 
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).
Your tasks:
1. StoreMark'sandJohn'smassandheightinvariables
2. CalculateboththeirBMIsusingtheformula(youcanevenimplementboth
versions)
3. CreateaBooleanvariable'markHigherBMI'containinginformationabout
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.
*/

/*
const massMark = 78;
const heightMark = 1.69;

const massJohn = 92;
const heightJohn = 1.95;

BMIMark = massMark / (heightMark * heightMark);
BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);
*/

//// STRINGS AND TEMPLATE LITERLAS ////

/*
const firstName = 'Sam';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

// String
const sam =
  "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(sam);

// Template Literal, much easier to use
const samNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(samNew);

console.log(`Just a regular string...`);

// Multiline strings
console.log(
  'String with \n\
multiple \n\
lines'
);

// No need \n\ for new line with template literal
console.log(`String 
multiple 
lines`);
*/

//// TAKING DECISIONS: IF/ELSE STATEMENTS

/* 
If else statement is an if/else control structure, because this allows us to have more control 
over the way the code is execuded.

*/
const age = 15;

if (age >= 18) {
  console.log('Sarah can start driving license 🚗');
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 1991;
let century = 20;

if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);
