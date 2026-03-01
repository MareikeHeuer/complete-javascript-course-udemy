'use strict';

// # selects by ID
const score0El = document.querySelector('#score--0');
// or use function to get the ID
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
