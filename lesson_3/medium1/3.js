/**
 * Alyssa noticed that this code would fail when the input is 0 or a negative 
 * number, and asked Alan to change the loop. How can he make this work without
 * using a do/while loop? Note that we're not looking to find the factors for
 * 0 or negative numbers, but we want to handle it gracefully instead of 
 * raising an exception or going into an infinite loop.
 * 
 */


/** 
function factors(number) {
  let divisor = number;
  let factors = [];
  do {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  } while (divisor !== 0);
  return factors;
}
*/

function factors(number) {
  if (number <= 0) {
    console.log('Enter a positive integer greater than 0.');
  } else {
    let factors = [];
    for (let divisor = number; divisor > 0; divisor -=1) {
      if (number % divisor === 0) {
        factors.push(number / divisor);
      }
    }
    console.log(factors);
  }
}
// test
factors(0);
factors(9);

// Book answer 
function factorsBook(number) {
  let divisor = number;
  let factors = [];
  while (divisor > 0) {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  }
  return factors;
}
//test
console.log(factorsBook(0));
console.log(factorsBook(9));
