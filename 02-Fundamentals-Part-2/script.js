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

/*
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
  */

//// CODING CHALLENGE 6 ////
/*
Steven wants you to improve his tip calculator, using the same rules as before — tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

Your tasks:

Write a function calcTip that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from the first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.

And now let's use arrays! So, create an array called bills containing the test data below.

Create an array called tips containing the tip value for each bill, calculated from the function you created before.

BONUS: Create an array totals containing the total values, so the bill + tip.

TEST DATA: 125, 555, and 44.
*/

/*
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const tips = [125, 555, 44];
const bills = [calcTip(tips[0]), calcTip(tips[1]), calcTip(tips[2])];

console.log(tips, bills);

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(totals);
*/

//// INTRODUCTION TO OBJECTS ////
/*
In objects are defined by key value pairs
Jonas object has 5 properties with 5 values

Difference between objects and arrays:
For objects the order of these values doesn't matter when retrieving them
*/

// Object literal syntax, writing thw object down

/*
const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
};
*/

//// DOT VS. BRACKET NOTATION ////

/*
Learn how to retrieve or change data using dot and bracket notation
 */

/*
const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
};

console.log(jonas);

// Getting object property value through dot notation
console.log(jonas.lastName);

// Getting object property value with bracket notation
console.log(jonas['lastName']);
// inside [] we can use any expression we like
const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

// Another example with bracket notation
// We don't know yet which property we want to use
const interestedIn = prompt(
  'What do you want to know about Jonas? Choose between firstName, lastName, age, jon, and friends.',
);

if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log(
    'Wrong request! Choose between firstName, lastName, age, jon, and friends.',
  );
}

// Add new properties using dot notation
jonas.location = 'Portugal';

// Add new properties using bracket notation
jonas['twitter'] = '@jonasschmedtman';

console.log(jonas);

// Challenge: Write a sentence in a dynamic way
// "Jonas has 3 friends, and his best friend is called Michael"

console.log(
  `${jonas.firstName} has three ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`,
);
*/

//// OBJECT METHODS ////
/*
Objects can hold different types of data, even arrays and objects
Also functions as values
*/

/*
const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  birthYear: 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
  hasDriversLicence: true,

  //   calcAge: function (birthYear) {
  //     return 2037 - birthYear;
  //   },

  //   calcAge: function () {
  //     // console.log(this);
  //     return 2037 - this.birthYear;
  //   },

  calcAge: function () {
    this.age = 2037 - this.birthYear; // this creates new property age
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicence ? 'a' : 'no'} drivers lisence.`;
  },
};

// console.log(jonas.calcAge()); // Need to call only once
console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

// console.log(jonas['calcAge'](1991));

// Challende: Write a method called getSummary, should return a string which should summarize the data about jonas
// 'Jonas is a 46 years old teacher, and he has a drivers lisence.'
console.log(jonas.getSummary());
*/

//// CODING CHALLENGE 7 ////
/* 
Let's go back to Mark and John comparing their BMIs!

This time, let's use objects to implement the calculations! Remember: BMI = mass / (height * height) (mass in kg and height in meters).

Your tasks:

For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith). Name these objects as mark and john, and their properties exactly as fullName, mass and height.

Create a calcBMI method on each object to calculate the BMI (the same method on both objects). Assign the BMI value to a property called bmi (lowercase), and also return it from the method.

Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!".

TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.

IMPORTANT: The ** operator is not supported in this editor. Please make sure to use exactly this formula mass / (height * height), and not this one mass / (height ** 2).
*/

/*
const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,

  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,

  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

mark.calcBMI();
john.calcBMI();

if (mark.bmi > john.bmi) {
  console.log(
    `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`,
  );
} else if (john.bmi > mark.bmi) {
  console.log(
    `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`,
  );
}
  */

//// ITERATION: THE FOR LOOP ////

/*
Loops are another control struture 
Fundamental aspect of every programming language, allow us to perform repetitive tasks
Eg: Gym, 10 repetitions of certain exercise, can be represented by a loop
*/

// console.log('Lifting weights repetition 1 🏋️‍♀️');
// console.log('Lifting weights repetition 2 🏋️‍♀️');
// console.log('Lifting weights repetition 3 🏋️‍♀️');
// etc

// Loop has 3 parts
// 1: Initial value of counter,
// 2: Logical condition evaluated before each iteration of the loop, loop runs while condition is true
// 3. Increasing the counter after each iteration
/*
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}
*/

//// LOOPING ARRAYS, BREAKING AND CONTINUING ////
/*
Explore more features of the for loop 
 */

/*
const jonas = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven'],
  true,
];

const types = [];

// Log every element of the array
for (let i = 0; i < jonas.length; i++) {
  // Create new array which logs each element type of jonas array
  //   types[i] = typeof jonas[i];
  types.push([typeof jonas[i]]);
  console.log(types);
  console.log(jonas[i], typeof jonas[i]);
}

// Array of birthYears
// Calcualte the ages for all brithYears and store them in a new array
const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  const birthYear = 2037 - years[i];
  ages.push(birthYear);
}

console.log('ages', ages);

// 2 important statement for loops: Continue & Break

// Continue: Exit the current iteration of the loop and continue to next one
console.log('----ONLY STRINGS----');
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] !== 'string') continue;
  console.log(jonas[i], typeof jonas[i]); // All element with type stirng will be logged to the console
}

// Break: Terminate the whole loop
// Log no other eleemnt after we found a number
console.log('----BREAK WITH NUMBER----');
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] === 'number') break;
  console.log(jonas[i], typeof jonas[i]);
}
*/

//// LOOPING BACKWARDS & LOOPS IN LOOPS ////
/*
1. Loop over array backwards
2. Create loop in another loop
*/

/*
const jonas = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven'],
  true,
];

// Log all items of the array backwards
for (let i = jonas.length - 1; i >= 0; i--) {
  console.log(jonas[i]), jonas[i];
}

// Loop inside a loop, 3 exercises 5 times, 3 reps 5 of each exercises
for (let exercise = 1; exercise <= 3; exercise++) {
  console.log(`------Starting exercise ${exercise}`);
  for (let rep = 1; rep <= 5; rep++) {
    console.log(`Exercise ${exercise}: Lifting weights repetition ${rep} 🏋️‍♀️`);
  }
}
*/

//// THE WHILE LOOP ////
/*

*/

/*
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}

// Same for the while loop
let rep = 1;
while (rep <= 10) {
  console.log(`WHILE----Lifting weights repetition ${rep} 🏋️‍♀️`);
  rep++;
}

// While loop only needs condition to run, Use for cases where counter not necessary
// Roll the dice until we roll a six
let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You roll a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1; // if we don't reassign, infinite loop
  if (dice === 6) console.log('Loop is about to end...');
}
  */

//// CODING CHALLENGE 8 ////
/*
Let's improve Steven's tip calculator even more, this time using loops!

Your tasks:

Create an array called bills containing all 10 test bill values.

Create empty arrays for the tips and the totals (tips and totals)

Use the calcTip function we wrote before (included in the starter code) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!



TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86, and 52.



BONUS:

Write a function calcAverage which takes an array called arr as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it if you feel like it:

First, you will need to add up all values in the array. To do the addition, start by creating a variable sum that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the sum variable. This way, by the end of the loop, you have all values added together.

To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements).

Call the function with the totals array
*/

// 1
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// 2
const tips = [];
const totals = [];

// 3
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(bills[i] + calcTip(bills[i]));
}

console.log('tips', tips);
console.log('totals', totals);

// Bonus

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]; // sum = sum + add[i]
  }
  return sum / arr.length;
};
console.log(calcAverage(totals));
