'use strict';

/*
WHAT IS DOM AND DOM MANIPULATION?

- DOM: Document Object Model: Structured complete representation of HTML documents. 
  Allows JS to access HTML element and styles to manipulate them.

- DOM is automatically created by the browser as soon as the HTML document loads as a DOM tree

- DOCUMENT: Special object that is the entry point to the DOM
  EG: document.querySelector() 

- DOM methods and properties are NOT part of JS , they are part of Web APIs
- APIs are librearies also written in JS, and can interact with JS

*/

/*
// querySelector() is a method that's available on the document
console.log(document.querySelector('.message').textContent);
// Set new content to DOM node
document.querySelector('.message').textContent = 'Correct Number 🎉';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

// Define secret number between 1 and 20 otuside of handler function, we need it once
let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let score = 20;

// Handling click event with eventListener
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = 'No number! ⛔️';

    // Player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number! 🎉';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // Number is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high 📈';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game 💥';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low 📉';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game 💥';
      document.querySelector('.score').textContent = 0;
    }
  }
});

// CODING CHALLENGE 1

/*
Implement a game rest functionality so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and number variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the oiginal backgroun color #222 and number width 15 rem
 */

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
