/**
 * P--------------------
 * - output: program that logs 
 * -when the user will retire 
 * - and how many more years the user has to work until retirement.
 * 
 * E --------------------
  What is your age? 30
  At what age would you like to retire? 70

  It's 2017. You will retire in 2057.
  You have only 40 years of work to go! 
 * A--------------------------------
 * - READ readline
 * const $YEAR is 2021
 * - readline.question to ask for age and save it to $age
 * - readline.question for retirement age and save it to $retireAge
 * - calculate year of retirement
 *  - subtract $age form $retireAge and set it to $yearsOfWork
 *  - add $yearsOfWork to $YEAR and set it to $retireYear
 *  log the first sentence
 *  - log the second sentence
 * 
*/

const READLINE = require('readline-sync');

let age = Number(READLINE.question('What is your age? '));
let retireAge = Number(
  READLINE.question('At what age would you like to retire? ')
);

let today = new Date();
let currentYear = today.getFullYear();

let yearsMoreWork = retireAge - age;
let retireYear = yearsMoreWork + currentYear;

console.log(`It's ${currentYear}. You will retire in ${retireYear}.`);
console.log(`You have only ${yearsMoreWork} years of work to go!`);


