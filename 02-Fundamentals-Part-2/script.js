/* 
Strict mode has to be first line of code, otherwise it won't work.
Strict mode makes it easier for us to write less buggy code
 1. It forbids us to do certain things 
 2. WIll throw visible errors in the developer console 
 */

'use strict';

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true; // strict mode will log the error to the console
if (hasDriversLicense) console.log('I can drive');

const interface = 'Audio'; //  strict mode shows words that are reserved for the future JS releases
