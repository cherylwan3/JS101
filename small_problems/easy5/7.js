/**
 * P----------------------------
 * input: function (array1, array2)
 * output: new array
 * rules:
 * - array1 and array2 contain list of numbers
 * - new array contains product of each pair of numbers that have same index
 * - array1 and array2 same number of elements
 * E-------------------------
 * D/A-----------------------
 * 1. declare function @multiplyList with paramters @arr1 and @arr2
 * 2. declare a variable @result to empty array
 * 3. start a loop to iterate over array1 from @idx '0' to @array1.length
 *    - multiply element at @idx of @arr1 and @arr2 
 *    - append the element to @result
 * 4. return result;
*/

//
multiplyList([3, 5, 7], [9, 10, 11]);    // [27, 50, 77]

function multiplyList (arr1, arr2) {
  let result = arr1.map((_, idx) => arr1[idx] * arr2[idx]);
  
  console.log(result);
  return result;
}