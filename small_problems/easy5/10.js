/**
 * P----------------------------
 * input: function (array of integers)
 * output: number
 * rules:
 * - array will never be empty, will always be positive
 * - average of all integers 
 *    -rounded down to the integer component of the average
 * E-------------------------
 * D/A-----------------------
 * 1. declare a function named @average with parameter @numArray
 * 2. iterate through @numArray from first to last element 
 *    - add all the numbers up 
 *    - end iteration
 * 3. declare a variable named @sum and set it to result of #2
 * 4. divide @sum by numArray.length set it to @avg 
 * 5. round down @avg to integer and return this 
*/

average([1, 5, 87, 45, 8, 8]);       // 25
average([9, 47, 23, 95, 16, 52]);    // 40

function average(numArray) {
  let avg = Math.floor(
    numArray.reduce((acum, num) => acum + num) / numArray.length
  );
  
  console.log(avg);
  return avg;
}