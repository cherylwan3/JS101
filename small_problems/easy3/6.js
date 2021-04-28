/**
 * P -----------------------------
 * Create a simple madlib program that prompts :
 * - for a noun, 
 * -a verb, 
 * -an adverb, 
 * -and an adjective,
 * - and injects them into a story that you create.
 * 
 * E-----------------------------
 * Enter a noun: dog
  Enter a verb: walk
  Enter an adjective: blue
  Enter an adverb: quickly

  // console output
  Do you walk your blue dog quickly? That's hilarious!
  The blue dog walks quickly over the lazy dog.
  The dog quickly walks up blue Joe's turtle.

  A ---------------------------
  - require readline-sync library into $readline
  - prompt for a noun and save it to $noun
  - prompt for a verb and save it to $verb
  -prompt for a adj and save it to $adj
  -prompt for a adv and save it to $adv
  - log the story with the words added in
*/

let readline = require('readline-sync');

let noun = readline.question('Enter a noun: ');
let verb = readline.question('Enter a verb: ');
let adj = readline.question('Enter an adjective: ');
let adv = readline.question('Enter an adverb: ');

console.log(`Do you ${verb} your ${adj} ${noun} ${adv}? That's hilarious!`);
console.log(`The ${adj} ${noun} ${verb}s ${adv} over the lazy ${noun}.`);
console.log(`The ${noun} ${adv} ${verb}s up ${adj} Joe's turtle.`);
