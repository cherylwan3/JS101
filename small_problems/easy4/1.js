/** 
 * P----------------------------
 * output: string 
 * - program generates Teddy's age
 * - number btw 20 and 120 (inclusive)
 * - logs string plus number to console
*/

// my sol

function randomBetween(min, max) {
  return Math.ceil(Math.random() * (max - min)) + min;
}

let age = randomBetween(20, 120);
console.log(`Teddy is ${age} years old!`);


// book solution
function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let age1 = randomBetween(20, 120);
console.log(`Teddy is ${age1} years old!`);