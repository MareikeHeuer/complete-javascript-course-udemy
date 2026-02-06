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
