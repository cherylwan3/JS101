// Simple max digit sum
// https://www.codewars.com/kata/5b162ed4c8c47ea2f5000023

/**
 * func(integer n)
 * output: integer 
 *  - largest integer with largest digit sum <= n
 *
 *D--
 * sumObj { sum: 0, num: 0} 
 *A--
  declare a higestSum object = { sum: 0, num: 0} 
 * iterate num from 0 to n
 *  for each num, turn it into a string, then array
 *    - use reduce to add up the numbers in the num array
 *    - if sum >= highestSumObj.sum
 *    - reassign highestSumObj.sum to current sum
 *    - reassign highestSumObj.num to current number
 * 
 * return the sum element at index 0
 * 
*/

function solve(n) {
  let sumObj = { num: 0, sum: 0};

  for (let num = 0; num <= n; num += 1) {
    let sum = [...String(num)]
      .map(str => +str)
      .reduce((total, num) => total + num, 0);
    if (sum >= sumObj.sum) {
      sumObj.sum = sum;
      sumObj.num = num;
    }
  }

  return sumObj.num;
}

console.log(solve(100) == 99);//. Digit Sum for 99 = 9 + 9 = 18. No other number <= 100 has a higher digit sum.
console.log(solve(10) == 9) 
console.log(solve(48) == 48) //. Note that 39 is also an option, but 48 is larger.