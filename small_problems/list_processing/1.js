/**
 * P---------------------
 * input: func(positive integer)
 * output: integer
 * rules:
 * - returns sum of digits
 * -Do this without using for, while, or do...while loops 
 *  - instead, use a series of method calls to perform the sum.
 * D/A-------------------
 * - declare func
 * - convert num to string, and then array
 * - iterate over string, 
 *  - convert string elements to number and add next element to current element -> sum
 * - return the sum 
 */


function sum(num) {
  let result = String(num)
      .split('')
      .reduce((sum, digit) => Number(digit) + Number(sum));
  //console.log(result);
  return result;
}

sum(23);           // 5
sum(496);          // 19
sum(123456789);    // 45