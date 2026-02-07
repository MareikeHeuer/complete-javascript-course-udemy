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

//// CODING CHALLENGE 2, SOLVE WITH AI ////

/*
 Let's say you're building a time tracking application for freelancers. 
 At some point in building this app, you need a function that receives daily work hours 
 for a certain week, and returns:
 
1. Total hours worked
2. Average daily hours
3. The day with the most hours worked
4. Number of days worked
5. Whether the week was full-time (worked 35 hours or more)
 
 
TEST DATA: [7.5, 8, 6.5, 0, 8.5, 4, 0]
*/

// 1. Understand the problem
// 2. Choose AI assistant tool, ChatGPT

// TEST DATA
const testData = [7.5, 8, 6.5, 0, 8.5, 5, 0];

// FUNCTION
function analyzeWorkWeek(workWeek) {
  const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  const totalHours = workWeek.reduce((sum, hours) => sum + hours, 0);
  const roundedTotal = Number(totalHours.toFixed(1));

  const daysWorked = workWeek.filter((hours) => hours > 0).length;

  const averageDailyHours = Number((totalHours / workWeek.length).toFixed(1));

  let maxHours = 0;
  let maxDayIndex = null;

  workWeek.forEach((hours, index) => {
    if (hours > maxHours) {
      maxHours = hours;
      maxDayIndex = index;
    }
  });

  const busiestDay = maxHours > 0 ? days[maxDayIndex] : null;
  const isFullTime = totalHours >= 35;

  return {
    totalHours: roundedTotal,
    averageDailyHours,
    busiestDay,
    daysWorked,
    isFullTime,
  };
}

// RUN TEST
console.log(analyzeWorkWeek(testData));
