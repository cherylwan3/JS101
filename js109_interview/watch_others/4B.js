/* eslint-disable max-lines-per-function */
/* eslint-disable max-statements */
/**
 * func(arrInt)
 * return: index N 
 * - sum of left and right side of N equal 
 * 
 * A---------
 * iterate over each idx, starting at 0
 *  - if current idx is 0, 
 *    -> sum of integers from index 1 to last index 
 *      => get a copy of the array from idx 1 onwards, and add it all up
 *    -> compare above some with 0
 *    -> if true, then return the current idx
 * - ELSE get copy of array from idx 0 to up to current idx 
 *    -> add the integers up => leftSum
 * - get copy of array from current idx + 1 to end of array
 *    -> add integers up => rightSum
 * - if leftSum is equal to the rightSum, return current index
 * 
 * return -1
*/

function findEvenIndex(arrInt) {
  for (let idx = 0; idx < arrInt.length; idx += 1) {
    let leftArr = arrInt.slice(0, idx);
    let rightArr = arrInt.slice(idx + 1);

    if (total(leftArr) === total(rightArr)) return idx;
  }

  return -1;
}

function total(arrInt) {
  return arrInt.reduce((total, num) => total + num, 0);
}


console.log(findEvenIndex([1,2,3,4,3,2,1]) === 3);
console.log(findEvenIndex([1, 100, 50, -51, 1, 1]) === 1);
console.log(findEvenIndex([1,2,3,4,5,6]) === -1);
console.log(findEvenIndex([20, 10, 30, 10, 10, 15, 35]) === 3);
console.log(findEvenIndex([20, 10, -80, 10, 10, 15, 35]) === 0);
console.log(findEvenIndex([10, -80, 10, 10, 15, 35, 20]) === 6);
console.log(findEvenIndex([-1,-2,-3,-4,-3,-2,-1]) === 3);
