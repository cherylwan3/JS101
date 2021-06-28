// ask user for integer
// if 's' compute the sum of all nums btw 1 and integer
//  - declare totalSum = 0, for loop all numbers
// log the result
// if 'p' compute product of all nums btw 1 and integer
// log the result

let readline = require('readline-sync');

let int = Number(readline.question('Please enter an integer greater than 0: '));
let operation = readline.question('Enter "s" to compute the sum, or "p" to compute the product. ');
if (operation === 's') {
  let sum = 0;
  for (let num = 1; num <= int; num += 1) {
    sum += num;
  }
  console.log(`The sum of the integers between 1 and ${int} is ${sum}.`);
} else if (operation === 'p'){
  let product = 1;
  for (let num = 1; num <= int; num += 1) {
    product *= num;
  }
  console.log(`The product of the integers between 1 and ${int} is ${product}.`);
}