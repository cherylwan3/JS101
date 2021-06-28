// - get the bill
// - get the tip percentage 
// - calculate the total bill 
//   - multiply percentage by bill, add it to the bill -> total bill

let readline = require('readline-sync');

let bill = Number(readline.question('What is the bill? '));
let tipPercent = Number(readline.question('What is the tip percentage? '));

let tipPercentDecimal = tipPercent / 100;
let tip = tipPercentDecimal * bill;

let totalBill = bill + tip;

console.log(`The tip is $${tip.toFixed(2)}`)
console.log(`The total is $${totalBill.toFixed(2)}.`)