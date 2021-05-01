/**
 * P----------------------------
 * input: function (array1, arary2)
 * output: array
 * rules:
 * - returned array: contains union of values from the two
 * - no duplication of values in returned array 
 *    - even if there are duplicates in original arrays
 * - assume both arguments will be arrays
 * E-------------------------
 * D/A-----------------------
 * 1. create a function called @union with parameters @array1 and @array2
 * 2. create an array named @resultArray
 * 3. add @array1 and @array 2 to @resultArray
 * 4. return @resultArray
 * 
*/

function union(array1, array2) {
  let joinedArray = [...array1, ...array2]; 
  let resultArray = [];
  joinedArray.forEach(num => {
    if (!resultArray.includes(num)) {
      resultArray.push(num);
    }
  });
  console.log(resultArray);
  return resultArray;
}



//
union([1, 3, 5], [3, 6, 9]);    // [1, 3, 5, 6, 9]