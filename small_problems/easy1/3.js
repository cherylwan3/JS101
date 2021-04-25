/**
 * P ----------------------------------
 * Output: number
 * Rules:
 * - log all even numbers from 1 to 99 (inclusive)
 * - all numbers are even
 * - each number is on a seperate line 
 * 
 * E/D ----------------------------
 * 2
 * 4
 * 6 
 * ...
 * 98
 * 
 * A ---------------------------
 * - start a loop
 *  - have a starting number of 2
 *  - log the number to the console
 *  - increment the number by 2
    - once the number is less than 100, end the loop
*/

// my sol
for (let num = 2; num < 100; num += 2) {
  console.log(num);
}

// LS sol:
for (let number = 1; number < 100; number += 1) {
  if (number % 2 === 1) {
    continue;
  }
  console.log(number);
}
// this solution iterates over all of the numbers, instead of just even numbers