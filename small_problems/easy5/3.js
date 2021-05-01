/**
 * P----------------------------
 * input: function (array)
 * output:  [[array1], [array2]]
 * rules:
 * -element 1 of returned array is first half of input array
 * - element 2 of returned array is second half of input array
 * -if odd number of elements, middle element in element 1 of input array
 * E-------------------------
 * D/A--------------------------------------------------------------
 * 1. declare function named @halvsies which parameter @originalArr
 * 2. set @resultArr to [];
 * 3.  set @middleIndex to @originalArr 's length divided by 2, 
 *     - if its odd, round it up using Math.ceil
 * 4. set @firstHalf to [];
 * 5. start a loop that uses @idx to iterate over @originalArr from '0' to 
 *    less than or equal to @middleIndex
 *        - append the element at @idx of @originalArr to @firstHalf 
 *        - increment @idx by 1 
 *    - end the loop
 * 6. set @secondHalf to [];
 * 7. start a loop that uses @idx to iterate over @originalArr from 
 *      @middleIndex to less than @originalArr.length 
 *        - append the element at @idx of @originalArr to @secondHalf 
 *        - increment @idx by 1 
 *    - end the loop
 * 8. append @firstHalf and @secondHalf to @resultArr
 * 9. return @resultArr
 *
*/

function halvsies(originalArr) {
  let middle = Math.ceil((originalArr.length) / 2);
  let firstHalf = originalArr.slice(0, middle);
  let secondHalf = originalArr.slice(middle);
  
  let result = [firstHalf, secondHalf];

  console.log(result);
  return result;
}

// 
halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
halvsies([5]);                // [[5], []]
halvsies([]);                 // [[], []]