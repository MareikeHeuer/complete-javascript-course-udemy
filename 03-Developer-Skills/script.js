// Remember, we're gonna use strict mode in all scripts now!
'use strict';

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
