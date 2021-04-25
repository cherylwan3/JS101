/**
 * *** P ------------------------
 * Rules:
 * - prompt for a bill amount
 * - prompt for a tip rate
 *    - the number be in whole number format: 15
 * - log both the tip and the total bill to the console 
 * - user will enter numbers
 * Input: bill amount (number), tip rate (number)
 * Output: 2 logs (tip rate and total bill)
 * - tip: 2 places after decimal, with dollar sign
 * - total bill ( 2 places after decimal), with dollar sign 
 * 
 * *** E -------------------------------------
 * What is the bill? 200
 * What is the tip percentage? 15
 * 
 * The tip is $30.00
 * The total is $230.00
 * 
 * *** A -------------------------------------
 * 1. GET the readline library and set it to 'readlineSync' 
 * 2. prompt the user for the bill amount 
 *  - set the input to 'bill' using readlineSync
 * 3. prompt the user for the tip rate
 *  - set the input to 'tipRate' using readlineSync
 * 4. Calculate the tip amount and set it to 'tip'
 * 5. calculate the total bill and set it to 'total'
 * 5. Log 'tip' to the console. 
 * 6. Log 'totalBill' to console.
 * 
 */

// my solution:
/* 
const readlineSync = require('readline-sync');

console.log('What is the bill?');
let bill = readlineSync.prompt();
bill = parseInt(bill);

console.log('What is the tip percentage?');
let tipRate = readlineSync.prompt();
tipRate = parseInt(tipRate) / 100;

let tip = tipRate * bill;
let total = bill + tip;

console.log(`The tip is $${tip.toFixed(2)}`);
console.log(`The total is $${total.toFixed(2)}`);
 */


// book solution
let readlineSync = require("readline-sync");

let bill = parseFloat(readlineSync.question("What is the bill?\n"));

let percentage = parseFloat(
  readlineSync.question("What is the tip percentage??\n")
);

let tip = bill * (percentage / 100);

let total = bill + tip;

console.log(`The tip is $${tip.toFixed(2)}`);
console.log(`The total is $${total.toFixed(2)}`);

