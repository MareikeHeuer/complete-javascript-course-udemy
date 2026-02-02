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

//// LOGICAL OPERATORS ////

/*
const hasDriversLicense = true; // A
const hasGoodVision = false; // B

// AND operator
console.log(hasDriversLicense && hasGoodVision); // false
// OR operator
console.log(hasDriversLicense || hasGoodVision); // true
// NOT operator
console.log(!hasDriversLicense); // false

// if (hasDriversLicense && hasGoodVision) {
//   console.log('Sarah is able to drive!');
// } else {
//   console.log('Someone else should drive..');
// }
*/

/*
const hasDriversLicense = true; // A
const hasGoodVision = true; // B
const isTired = true; // C

console.log(hasDriversLicense && hasGoodVision && isTired); // false

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log('Sarah is able to drive!');
} else {
  console.log('Someone else should drive..');
} // console log someone else should drive



//// CODING CHALLENGE 3 🙂 ////

/*There are two gymnastics teams: Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!

Your tasks:

1. Calculate the average score for each team, using the test data included below. The average score for Dolphins should be assigned to the scoreDolphins variable, and the average score of Koalas should be assigned to the scoreKoalas variable.

2. Compare the team's average scores to determine the winner of the competition, and print to the console:

"Dolphins win the trophy" if Dolphins win, or

"Koalas win the trophy" if Koalas win, or

"Both win the trophy" if their average scores are equal.

Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. 
Hint: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉

Bonus 2: Minimum score also applies to a draw! So a draw only happens 
when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy



TEST DATA: Dolphins scored 96, 108, and 89. Koalas scored 88, 91, and 110*/

// 1
// scoreDolphins = (96 + 108 + 89) / 3;
// scoreKoalas = (88 + 91 + 110) / 3;

// // 2
// if (scoreDolphins > scoreKoalas) {
//   console.log('Dolphins win the trophy');
// } else if (scoreKoalas > scoreDolphins) {
//   console.log('Koalas win the trophy');
// } else if (scoreDolphins === scoreKoalas) {
//   console.log('Both win the trophy');
// }

// Bonus 1, Bonus 2
/*
scoreDolphins = (97 + 112 + 101) / 3;
scoreKoalas = (109 + 95 + 123) / 3;

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log('Dolphins win the trophy');
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
  console.log('Koalas win the trophy');
} else if (
  scoreDolphins === scoreKoalas &&
  scoreDolphins >= 100 &&
  scoreKoalas >= 100
) {
  console.log('Both win the trophy');
} else {
  console.log('Noone wins the trophy');
}
  */

//// THE SWITCH STATEMENT ////

// Alternative way of writing a complicated if else statement when al we want to do is compare one value to multiple different options
// Weekday variable with different acttivities, map one activity to each day

/* 
const day = 'monday';

switch (day) {
  case 'monday':
    console.log('Plan course structure');
    console.log('Go to coding meetup');
    break; // without the break, code keeps executing
  case 'tuesday':
    console.log('Prepare thery videos');
    break;
  case 'wednesday':
  case 'thursday':
    console.log('Write code examples');
  case 'friday':
    console.log('Record videos');
    break;

  case 'saturday':
  case 'sunday':
    console.log('Enjoy the weekend :D');
    break;
  default:
    console.log('Not a valid day!');
}

if (day === 'monday') {
  console.log('Plan course structure');
  console.log('Go to coding meetup');
} else if (day === 'tuesday') {
  console.log('Prepare thery videos');
} else if (day === 'wednesday' || day === 'thursday') {
  console.log('Write code examples');
} else if (day === 'friday') {
  console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
  console.log('Enjoy the weekend :D');
} else {
  console.log('Not a valid day!');
}
*/

//// STATEMENTS AND EXPRESSIONS ////

/*
// Expression: Piece of code that produces a value
// Examples
3 + 4;
1991;
true && false && !false;

// Statement: A bigger piece of code that is executed and doesn't produce a value
// Exampels
if (23 > 10) {
  const str = '23 is bigger';
}

const me = 'Mell';
console.log(`I'm ${2037 - 1990} years old ${me}`);
*/

//// THE CONDITIONAL (TERNARY) OPERATOR ////

// The conditional operator allows us to write somthing similar like an if else statement, but all in one line
/*
const age = 23;
age >= 18
  ? console.log('I love to drink wine 🍷')
  : console.log('I love to drink water 💧');

const drink = age >= 18 ? 'wine 🍷' : 'water 💧';
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = 'wine 🍷';
} else {
  drink2 = 'water 💧';
}

console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 💧'}`);
*/

//// CODING CHALLENGE 4 ////
/*
Steven needs a very simple tip calculator for whenever he goes to eat in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

Your tasks:

Calculate the tip, depending on the bill value. Create a variable called tip for this. It's not allowed to use an if...else statement (if it's easier for you, you can start with an if...else statement, and then try to convert it to a ternary operator).

Print a string to the console containing the bill value, the tip, and the final value (bill + tip).

Example: The bill was 275, the tip was 41.25, and the total value 316.25.

Note: Use the values of the bill and tip variables to construct this string. Don't hard-code them 🙂

TEST DATA: Test with different bill values: 275, 40, and 430

HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2

HINT 2: Value X is between 50 and 300, if it's >= 50 && <= 300 😉
*/

/*
const bill = 40;

const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`,
);
*/

//// JAVASCRIPT RELEEASES ES5, ES6+ and ESNEXT ////

/*

- 1995: Brenden Eich creates very first version of JS in just 10 days 
        Was called MediaSourceHandle, but already had many fundamental features of modern JS

- 2009: ES5, fully supported in all modern browsers (down to IE 9 from 2011)
- 2015: ES6, the biggest udate to the language ever, modern JS
        No support in older browsers, can ust most features in production with transpiling and poltfilling


BACKWARDS COMPATIBILITY: DON'T BREAK THE WEB

- Modern JS is able to understand old code, but not other way around 

HOW TO USE JAVASCRIPT TODAY?

Consider 2 scenarios
- Development: Simply use the latest Google Chromwe Version 
- Production: Use Babel to transpile and polyfill your code 
(converting back to ES5 to ensure browser compatibility for all users)
*/
