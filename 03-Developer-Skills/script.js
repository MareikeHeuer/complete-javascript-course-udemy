// Remember, we're gonna use strict mode in all scripts now!
'use strict';

/*
const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    // C FIX BUG
    value: Number(prompt('Degrees celsius')),
  };

  // B FIND BUG
  console.log('Onject measureKelvin', measurement);
  console.table(measurement);

  console.log('measurement value', measurement.value);
  //   console.warn('measurement value warn', measurement.value);
  //   console.error('measurement value erorr', measurement.value);
  const kelvin = measurement.value + 273;
  return kelvin;
};

// IDENTIFY BUG
console.log(measureKelvin()); // enter 10, then 10273, prompt always retufns string
*/

//// CODING CHALLENGE 1 ////

/*
Given an arry of forcasted maximum temperatures. the thermometer displays a string with these temperatures.

Example [17, 21, 23] will print "... 17°C in 1 days ... 21°C om 2 days ... 23°C in 3 days ..."

Create a function 'printForecast which takes in an array 'arr'' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it down into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

/*
// 1. Create arrays with test data
const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];
// 4. Create empty string for the loop
let string = ``;

// 2. Create printForecast function, which takes arr af parameter and logs string to console
const printForecast = function (arr) {
  // 3. Don't hardcode the values of the array
  for (let i = 0; i < arr.length; i++) {
    string += `${arr[i]}ºC in ${i + 1} days...`;
  }
  return string;
};

console.log(printForecast(data1));
console.log(printForecast(data2));
*/

//// THE RISE OF AI TOOLS ////

/*
WORKING WITH AI

1. Make sure you 100% understand the problem. Ask questions to get a clearer picture.
2. Choose AI and give it very specific prompt and enough context (language, style, etc).
3. Review and test the output solution. Make sure you introduce no bugs into your app.
4. Correct or improve the solution.
5. Abandon the AI if it's not helping.

WHEN SHOULD YOU CHOOSE TO WORK WITH AI?

1. You need to know how to code on your own. Fundamental skills are 100% essential!
2. You need to be able to solve problems on your own.
3. You need to have very critical thinking (AI code contains a surprising amount of bugs or bad code)
4. You need to have curiosity and joy while coding

INCORPORATE AI CODE

1. If you could have written the code yourself
2. If you truly understand the generated code
3. If you have ensured the code is 100% correct
4. WHen you're using the code for mission-critical parts of your app


Don't just use AI without knowing what you're doing. 
Otherwise, AI will turn you into a terrible programmer!

INSTEAD

Use AI as an assistant, not a replacement! 
Save time on repetitice and boring tasks. It's also great for learning! 
*/
