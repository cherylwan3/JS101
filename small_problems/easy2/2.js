/**
 * P-------------------------
 * input: name (string)
 * output: greets the user (string)
 * rules:
 * - a program that ask's for user's name
 * - program will then greet the user using user's name
 * - if user adds an exclamation mark '!', the geeting will be in all caps
 * E------------------------
  What is your name? Bob!
  HELLO BOB. WHY ARE WE SCREAMING
 * A------------------------------
 * - read the 'readline-sync' library and set it to the variable 'readlineSync' 
 * - prompt the user 'What is your name?'
 * - read the user input and set it to 'name'
 *  - IF 'name' doesn't end with '!'
 *    - log the string 'Hello, 'name''
 * - ELSE 
 *    - log the string in all caps: 
 *    -'HELLO 'NAME' WHY ARE WE SCREAMING?'
 */

let readlineSync = require('readline-sync');

let name = readlineSync.question('What is your name? ');

if (!name.endsWith('!')) {
  console.log(`Hello, ${name}.`);
} else {
  name = name.slice(0, -1).toUpperCase();
  console.log(`HELLO ${name}. WHY ARE WE SCREAMING?`)
}


/* // book's method
let readlineSync = require("readline-sync");

let name = readlineSync.question("What is your name?\n");

if (name[name.length - 1] === "!") {
  name = name.slice(0, -1);
  console.log(`HELLO ${name.toUpperCase()}. WHY ARE YOU SCREAMING?`);
} else {
  console.log(`Hello ${name}.`);
} */