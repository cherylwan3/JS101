/**
 * A--------
 * - get age from user
 * -  get retireAge from user
 * - yearsMore = retireAge - age
 * 
 * -log 2021 + yearsMore 
 * - log yearsMore 
*/


let readline = require('readline-sync');

let age = readline.question('What is your age? ');
let retireAge = readline.question('At what age would you like to retire? ');

let moreYrs = retireAge - age;

let date = new Date();
let currentYear = date.getFullYear();

console.log(`It's ${currentYear}. You will retire in ${currentYear + moreYrs}.`);
console.log(`You only have ${moreYrs} years of work to go!`);