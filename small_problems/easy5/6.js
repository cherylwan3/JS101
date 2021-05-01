/**
 * P----------------------------
 * input: function (array)
 * output:
 * rules:
 * - function takes in array of integers
 *    - multiplies all of the integers together
 *    - divides the result by the number of entries in the array, 
 *    - returns the result as a string rounded to three decimal places.
 * E-------------------------
 * D/A-----------------------
 * 1. declare a function named @multiplicativeAverage with parameter @array
 * 2. set a variable @multiplyTotal to value of '1'
 * 3. start a loop that iterates over @array from @idx of '0' to @array.length - 1 
 *    - set @numTotal to the multiplication of the 
 *      current @num at current@idx of @array with multiplyTotal
 *   - end the loop 
 * 4. divide @numTotal by @array.length 
 * 5. return String version of @numTotal rounded to three decimal places
*/
// E:
multiplicativeAverage([3, 5]);                   // "7.500"
multiplicativeAverage([2, 5, 7, 11, 13, 17]);    // "28361.667"

function multiplicativeAverage(array) {
  let total = array.reduce((numTotal, num) => numTotal * num);
  let totalAvg = (total / array.length).toFixed(3);
  
  console.log(totalAvg);
  return totalAvg;
} 
