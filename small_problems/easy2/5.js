/**
 * P-------------------
 * - program prompts user for 2 positive integers
 * - print result of operation:
 *  - (addition, substraction,product, quotient, remainder, and power)
 * - dont need to validate input
 * E-------------------------
  ==> Enter the first number:
  23
  ==> Enter the second number:
  17
  ==> 23 + 17 = 40
  ==> 23 - 17 = 6
  ==> 23 * 17 = 391
  ==> 23 / 17 = 1
  ==> 23 % 17 = 6
  ==> 23 ** 17 = 1.4105003956066297e+23
 */

let readline = require('readline-sync');

let num1 = Number(readline.question('Enter the first number.\n'));
let num2 = Number(readline.question('Enter the second number.\n'));

console.log(`${num1} + ${num2} = ${num1 + num2}`); 
console.log(`${num1} - ${num2} = ${num1 - num2}`); 
console.log(`${num1} * ${num2} = ${num1 * num2}`); 
console.log(`${num1} / ${num2} = ${num1 / num2}`); 
console.log(`${num1} % ${num2} = ${num1 % num2}`); 
console.log(`${num1} ** ${num2} = ${num1 ** num2}`);

// books way
const readlineSync = require("readline-sync");

console.log("Enter the first number:");
let firstNumber = Number(readlineSync.prompt());
console.log("Enter the second number:");
let secondNumber = Number(readlineSync.prompt());

console.log(`${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`);
console.log(`${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}`);
console.log(`${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`);
console.log(`${firstNumber} / ${secondNumber} = ${Math.floor(firstNumber / secondNumber)}`);
console.log(`${firstNumber} % ${secondNumber} = ${firstNumber % secondNumber}`);
console.log(
  `${firstNumber} ** ${secondNumber} = ${Math.pow(firstNumber, secondNumber)}`
);