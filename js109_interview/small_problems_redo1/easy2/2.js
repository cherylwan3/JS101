/**
 * A:
 * - get name
 * - if name ends with !, log the sentence
*/

let readline = require('readline-sync');

let name = readline.question('What is your name? ');

if (name.endsWith('!')) {
  name = name.slice(0, name.length - 1);
  console.log(`HELLO ${name.toUpperCase()}. WHY ARE WE SCREAMING?`)
} else {
  console.log(`Hello ${name}.`);
}