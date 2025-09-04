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

/*
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
*/

//// CODING CHALLENGE 2 🙂 ////

/* 
Use the BMI example from Challenge #1, and the code you already wrote, and improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example:"Mark's BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement 😉 
*/

/*
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's! (${BMIJohn})`);
} else {
  console.log(`John's BMI (${BMIJohn}) is higher than Mark's! (${BMIMark})`);
}
*/

//// TYPE CONVERSION AND COERCION ////

// Type Conversion: Manually switching type

/*

const inputYear = '1991'; // String, not number, need to convert to number
console.log(Number(inputYear));
console.log(inputYear + 18); // string 199118

console.log(Number('Mell')); // NaN (Not a number)
console.log(typeof NaN); // number , but means an invalid number

console.log(String(23));

// Type Coersion: JS automatically converts types for us, hidden

// Plus operator performs typr coersion to string
console.log('I am ' + 23 + 'years old'); // I am 23 years old
// Minus operator converts strings to numbers, so opposite of the plus operator
console.log('23' - '10' - 3); // 10
// Conversion to numbers
console.log('23' * '2');

let n = '1' + 1;
n = n - 1;
console.log(n); // 10
*/

//// TRUTHY AND FALSY VALUES ////

/* 
5 falsy values: 0, '', undefined, null, NaN
Not false initially, but will be converted to false when turned to boolean
*/

/*
console.log(Boolean(0)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean('Mell')); // true
console.log(Boolean({})); // true
console.log(Boolean('')); // false
*/

/* 
JS does type coercion in 2 scenarios
 1. Whhen using logical operators
 2. In logical condition, like if else statements 
*/

/*
const money = 0;
if (money) {
  // 0 is falsy
  console.log("Don't spend it all :)");
} else {
  console.log('You should get a jon!'); // console logs this, JS will convert any value to a boolean
}

let height; // height is undefined, no value assigned, falsy
if (height) {
  console.log('YAY! Height is defined');
} else {
  console.log('Height is UNDEEFINED!'); // This block is executed
}
*/

//// EQUALITY OPERATORS: == vs. === ////

/*

// === Strict equality operator, only returns true when both valuea ar exactly the same
const age = 18;
if (age === 18) console.log('You just became an adult :D');

// == Loose equality oeprator, performs type coercion
if (age == '18') console.log('You just became an adult :D'); // true
// Can introduce bugs, so if possible, avoid using loose equality operator

const favourite = prompt("What's your favorite number?");
console.log(typeof favourite); // string

if (favourite == 23) {
  console.log('Cool! 23 is an amazing number!');
} else if (favourite === 7) {
  console.log('7 is also a cool number');
} else {
  console.log('Number is not 23 or 7');
}

// strict version !==  loose version !=
if (favourite !== 23) {
  console.log('Why not 23?');
}
*/

//// BOOLEAN LOGIC ////

/*
A: Sarah has adriver's lisence
B: Sarah has good vision

1. AND Operator returns true if both are true 
A === true && B === true

2. OR Operator returns true if one condition is true
A === true || B === false

3. NOT Operator inverts true/false value
If A not true, it converts to false and vice versa
*/
