/**
 * ** P ______________________________________
 * 
 * Rules:
 * - log all odd numbers from 1 to 99 (inclusive) to the console
 * - each number is on a separate line 
 * 
 * ** E/D _____________________________________________
 * 
 * 1
 * 3
 * 5
 * ...
 * 99
 * 
 * ** A ___________________________________________
 * - write a loop that logs numbers to the console
 * 
 * START
 *  SET counter = 1
 * 
 *  WHILE counter <= 99
 *    IF counter is an odd number
 *    PRINT counter 
 *    counter  = counter + 1
 * 
 * END
 */

// my solution
for (let number = 1; number <= 99; number+= 1) {
  if (number % 2 === 1) console.log(number);
}

// LS sol
for (let number = 1; number < 100; number += 2) {
  console.log(number);
}