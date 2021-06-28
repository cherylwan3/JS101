// get random num
// log sent
/**
 * number btw 20 (exclusive) 120(inclusive)
 * 
 * 21 - 120 
 * 
 * 120 -
*/




function randomBetween(min, max) {
  return Math.ceil(Math.random() * (max - min)) + min;
}

let age = randomBetween(20, 100);
console.log(`Teddy is ${age} years old!`);