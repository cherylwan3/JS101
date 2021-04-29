/**
 * P-----------------------
 * input: function (array of numbers)
 * output: same array of numbers
 * rules:
 * - function retuns array with each element's value
 *  as the running total from the original array
 * A------------------------------
 * - function runningTotal(array)
 * - set $changedArray to [];
 * - set idx to 0;
 * - WHILE idx < $changedArray's length
 *  - IF idx is 0, 
 *      - push $array[idx] to $changedArray;
 *  - ELSE
 *      - push $array[idx] + $array[idx - 1] to $changedArray
 * 
 * return $changedArray
*/

// book's method
function runningTotal2(array) {
  let resultArray = [];
  let sum = 0;

  for (let idx = 0; idx < array.length; idx += 1) {
    resultArray.push((sum += array[idx]));
  }

  return resultArray;
};

// my short method using map
function runningTotal(array) {
  let sum = 0;
  let result = array.map(num => sum += num);

  console.log(result);
  return result;
} 


runningTotal([2, 5, 13]);             // [2, 7, 20]
runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
runningTotal([3]);                    // [3]
runningTotal([]);                     // [] 

