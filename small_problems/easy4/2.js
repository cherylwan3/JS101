/**
 * P-------------------------------
 * - program GETS 6 numbers 
 * - logs a message: whether sixth number appears among the first five numbers.
 * 
 * A--------------------------
 * -install readline
 * -readline.question for 5 numbers
 * - push each number into $numberArray
 * - readline.question for 6th number
 * -set $StringNumbers to $numberArray joined together 
 * - if numberArray includes 6 number, 
 * log a message that says it appears in $stringNumbers
 * - ELSE
 *  log message that says it doesn't appear in $stringNumbers
*/

let readline = require('readline-sync');

let numArray = [];

numArray.push(readline.question('Enter the 1st number: '));
numArray.push(readline.question('Enter the 2nd number: '));
numArray.push(readline.question('Enter the 3rd number: '));
numArray.push(readline.question('Enter the 4th number: '));
numArray.push(readline.question('Enter the 5th number: '));
let numLast = readline.question('Enter the last number: ');

let isInOrNot = numArray.includes(numLast) ? 'appears' : 'does not appear';
console.log(`The number ${numLast} ${isInOrNot} in ${numArray}.`);

