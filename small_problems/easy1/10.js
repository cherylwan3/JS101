/**
 * P: --------------------------
 * Input: function with one argument (a number)
 * Output: the sum number
 * Rules:
 * - write a function
 *    - function computes sum of all numbers btw 1 and other number (inclusive), 
 *    - numbers are multiples of 3 and 5
 *    - assume number passed is an integer greater than 1
 *    
 * E------------------------------- 
 *  multisum(3);       // 3
    multisum(5);       // 8
    multisum(10);      // 33
    multisum(1000);    // 234168
 * 
 * A ----------------------------------
 * - write a function named 'multisum' with one parameter named 'number2'
 *    - SET 'counter' = 3
 *    - SET 'sum' = 0
 *    - WHILE 'counter' <= 'number2'
 *        - IF 'counter' % 3 === 0 OR 'counter' % 5 === 0 
 *         - add 'counter' to sum 
 *         - increment 'counter' by one 
 *    - return the sum 
 */

function multisum(maxNum) {
  let sum = 0;
  for (let counter = 3; counter <= maxNum; counter += 1) {
    if (counter % 3 === 0 || counter % 5 === 0) {
      sum += counter;
    }
  }
  console.log(sum);
  return sum;
}

multisum(3);       // 3
multisum(5);       // 8
multisum(10);      // 33
multisum(1000);    // 234168


/* 
 // book's method:

function isMultiple(number, divisor) {
  return number % divisor === 0;
}

function multisum(maxValue) {
  let sum = 0;

  for (let number = 1; number <= maxValue; number += 1) {
    if (isMultiple(number, 3) || isMultiple(number, 5)) {
      sum += number;
    }
  }

  return sum;
} */