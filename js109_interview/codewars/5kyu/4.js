/**
 * https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c/train/javascript
 * func (array of nums)
 * return: max sum of contiguous subsequence 
 * - if list is all positive, return sum of whole arr
 * - if list is all negative, return 0
 * 
 * A--
 * - declare largest sum
 * - get all possible subarrays and sum
 *   - if sum is > largest sum, reassign largest sum to current sum
 ----
 - getting all subarrays
    - itreate from idx 0 to arr.length - 1
      - iterate from idx2 of idx1 + 1 to arr.length 
        - get the arr.slice(idx1, idx2)
        - sum this array

 * - return the largestSum
*/

function maxSequence(arr) {
  let largeSum = 0;

  for (let idx1 = 0; idx1 < arr.length; idx1 += 1) {
    for (let idx2 = idx1 + 1; idx2 <= arr.length; idx2 += 1) {
      let subArr = arr.slice(idx1, idx2);
      let sum = subArr.reduce((total, num) => total + num, 0);
      if (sum > largeSum) largeSum = sum;
    }
  }

  return largeSum;
}


console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
// should be 6: [4, -1, 2, 1]

console.log(maxSequence([])) // 0