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

// querySelector() is a method that's available on the document
console.log(document.querySelector('.message').textContent);
// Set new content to DOM node
document.querySelector('.message').textContent = 'Correct Number 🎉';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
