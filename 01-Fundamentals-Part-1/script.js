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
*/

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
