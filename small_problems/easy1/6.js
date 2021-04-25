/**
 * P: ------------------------
 * - prompt user to enter an integer greater than 0
 * - prompt user if user wants to determine sum or product of all numbers btw 1 
 *  and the integer, inclusive
 * Input: 
 * -integer greater than 0
 * Output: 
 * -integer: sum or product of all numbers btw 1 and the integer, inclusive
 * 
 * E: ------------------------
 * Please enter an integer greater than 0: 5
 * Enter "s" to compute the sum, or "p" to compute the product. 
 * The sum of the integers between 1 and 5 is 15.
 * 
 * Please enter an integer greater than 0: 6
 * Enter "s" to compute the sum, or "p" to compute the product. p
 * The product of the integers between 1 and 6 is 720.
 * 
 * A:------------------------
 * -declare 'readline' variable and set it to readline library
 * - Prompt user for integer greater than 0
 * - save user input into 'number'
 * - prompt user for sum or product action 
 * - save the answer to SumOrProduct
 * - if sum, add the number from 1 to 'numberinclusive'.
 *    - declare a 'totalSum' variable and set it to 0.
 *    -declare a counter variable and set it to 1
 *    - While loop:
 *     - while the counter is less than or equal to 'number', totalSum equals 
 *       totalSum plus the counter. 
 *     - increment the counter by 1 
 *  - log the string and sum to console.
 * - if product, multiply the numbers from 1 to 'number' inclusive.
 *    - declare a 'totalProduct' variable and set it to 1.
 *    - declare a counter variable and set it to 1
 *    - while loop
 *    -   while the counter is less than or equal to 'number', totalProduct equals 
 *       totalProduct times the counter. 
 *    -   increment the counter by 1
 * - log the string and product to the console. 
 */

// My solution
/* 
let readline = require('readline-sync');

let number = parseInt(readline.question(
  'Please enter an integer greater than 0:\n'
));

let sumOrProduct = readline.question(
  'Enter "s" to compute the sum, or "p" to compute the product.\n'
);

if (sumOrProduct === 's') {
  let totalSum = 0;
  let counter = 1;
  while (counter <= number) {
    totalSum += counter;
    counter += 1;
  }
  console.log(`The sum of the integers between 1 and ${number} is ${totalSum}.`);
} else if (sumOrProduct === 'p') {
  let totalProduct = 1;
  let counter = 1;
  while (counter <= number) {
    totalProduct *= counter;
    counter += 1;
  }
  console.log(`The product of the integers between 1 and ${number} is ${totalProduct}.`);
} else {
  console.log('unknown operation.')
} */



// Book's solution
function computeSum(targetNum) {
  let total = 0;

  for (let num = 1; num <= targetNum; num += 1) {
    total += num;
  }

  return total;
}

function computeProduct(targetNum) {
  let total = 1;

  for (let num = 1; num <= targetNum; num += 1) {
    total *= num;
  }

  return total;
}

let readlineSync = require("readline-sync");

console.log("Please enter an integer greater than 0");
let number = parseInt(readlineSync.prompt(), 10);

console.log("Enter 's' to compute the sum, 'p' to compute the product.");
let operation = readlineSync.prompt();

if (operation === "s") {
  let sum = computeSum(number);
  console.log(`The sum of the integers between 1 and ${number} is ${sum}.`);
} else if (operation === "p") {
  let product = computeProduct(number);
  console.log(
    `The product of the integers between 1 and ${number} is ${product}.`
  );
} else {
  console.log("Oops. Unknown operation.");
}  