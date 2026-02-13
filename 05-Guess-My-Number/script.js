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
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

function setBodyColor(color) {
  document.querySelector('body').style.backgroundColor = color;
}

// Handling click event with eventListener
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    displayMessage('No number! ⛔️');

    // Player wins
  } else if (guess === secretNumber) {
    displayMessage('Correct Number! 🎉');
    displayNumber(secretNumber);
    setBodyColor('#60b347');
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // Number is wrong
  } else if (guess !== secretNumber) {
    if (guess !== secretNumber) {
      if (score > 1) {
        guess > secretNumber
          ? displayMessage('Too high 📈')
          : displayMessage('Too low 📉');
        score--;
        displayScore(score);
      } else {
        displayMessage('You lost the game 💥');
        displayScore(0);
      }
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
  displayMessage('Start guessing...');
  displayScore(score);
  displayNumber('?');
  document.querySelector('.guess').value = '';
  setBodyColor('#222');
  document.querySelector('.number').style.width = '15rem';
});
