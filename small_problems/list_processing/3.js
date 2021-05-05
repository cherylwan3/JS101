/**
 * P---------------------
 * input: func(arr1, arr2)
 * output:
 * rules:
 * - function takes two array arguments, each containing a list of numbers,
 * - returns a new array containing the 
 *  - products of 
 *  - all combinations of number pairs that exist between the two arrays.
 * - The returned array should be sorted in ascending numerical order.
 * - You may assume that neither argument will be an empty array.
 * D/A-------------------
 * - declare func
 * - declare @result and set it to empty array
 * - start a loop, iterate over arr1 from @idxArr1 0 to arr1.length
 *  - start a loop iterate over arr2 from @idxArr2 0 to arr2.length
 *    - append the  product of arr1[idxArr1] and arr2[idxArr2] to @result
 *   - end inner loop
 * - end outer loop
 * - return @result
*/

multiplyAllPairs([2, 4], [4, 3, 1, 2]);    // [2, 4, 4, 6, 8, 8, 12, 16]

function multiplyAllPairs(arr1, arr2) {
  const result = [];
  
  arr1.forEach(elem1 => {
    arr2.forEach(elem2 => {
      result.push(elem1 * elem2);
    });
  });
  
  console.log(result.sort((a, b) => a - b));
  return result.sort((a, b) => a - b);
}