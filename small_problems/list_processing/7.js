/**
 * P---------------------
 * input: func(array of numbers)
 * output: num
 * rules:
 * - returns the sum of the 
 *    sums of each leading subsequence in that array. 
 * - array always contains at least one number.
 * D/A-------------------
 * - declare func (array)
 * - obtain each sub-array numbers
 *    - iterate over @array from @idx of 0 to array's length
 *      - get sub-array from @array at @currentIdx to @array.length
 *      - append it to @subArr
 * - iterate over @subArr
 *    - sum each element and  append it to an array -> @subSumArr
 * - iterate over @subSumArr
 *   - add up every element and return the result
*/

// shortest solution
let sumOfSums = (arr) =>
  arr.reduce((sum, num, idx) => sum + num * (arr.length - idx), 0);


// ex
console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35

// multiple function solution
function getSubArray(array) {
  return array.map((_, idx) => array.slice(0, idx + 1));
}

function sumOfArray(array) {
  return array.reduce((sum, num) => sum + num);
}

function sumOfSums1(array) {
  let subArr = getSubArray(array);
  let subArrSums = subArr.map(arr => sumOfArray(arr));
  
  return sumOfArray(subArrSums);
}

// short solution
function sumOfSums2(array) {
  return array.map((_, idx) => {
    return array.slice(0, idx + 1).reduce((sum, num) => sum + num);
    })
    .reduce((sum, num) => sum + num);
}

