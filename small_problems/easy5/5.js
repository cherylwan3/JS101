/**
 * P----------------------------
 * input: function (array1, array2)
 * output: new array
 * rules:
 * - new array contains all elements from both arrays, 
 *  - with each element taken in alternation.
 * - assume that both input arrays are non-empty, 
 * - have same number of elements.
 * E-------------------------
 * D/A-----------------------
 * 1. function named @interleave with parameter @array1 and @array2
 * 2. set @resultArray to an empty array
 * 3. set @resultLength to @array1 length + @array2 length 
 * 4. start a loop to iterate over @resultArray from @idx of '0' 
 *    to  @resultArray.length (exclusive)
 *    -  append element at current@idx of @array1 to current@idx of @resultArray
 *    - increment @idx by 2 
 *  - end the loop
 * 5. start a loop to iterate over @resultArray from idx of '1' 
 *    to @resultArray.length (exclusive)
 *    - append element at current@idx of @array2 to current@idx of @resultArray
 *    - increment @idx by 2 
 *  - end the loop
 * 6. return @resultArray
*/

/* // my convoluted solution
 function interleave0(array1, array2) {
  const RESULT_LENGTH = array1.length + array2.length;
  let resultArray = [];
  
  let arrIdx = 0;
  for (let resultIdx = 0; resultIdx < RESULT_LENGTH; resultIdx += 2) {
      if (!resultArray[resultIdx]) {
        resultArray[resultIdx] = array1[arrIdx];
      }
      arrIdx += 1;
  }
  
  arrIdx = 0;
  for (let resultIdx = 1; resultIdx < RESULT_LENGTH; resultIdx += 2) {
    if (!resultArray[resultIdx]) {
      resultArray[resultIdx] = array2[arrIdx];
    }
    arrIdx += 1;
}
  
  console.log(resultArray);
  return resultArray; 
}  */


// example
interleave3([1, 2, 3], ['a', 'b', 'c']);    // [1, "a", 2, "b", 3, "c"]

// copying book solution
function interleave1(array1, array2) {
  let resultArray = [];

  for (let idx = 0; idx < array1.length ; idx += 1) {
    resultArray.push(array1[idx], array2[idx]);
  }

  console.log(resultArray);
  return resultArray;
}

// using  Array.prototype.forEach
function interleave2(array1, array2) {
  let resultArray = [];

  array1.forEach((_, idx) => {
    resultArray.push(array1[idx], array2[idx]);
  });

  console.log(resultArray);
  return resultArray;
}

// using  Array.prototype.map
// SHORTEST SOLUTION--------------------------------------------------------
function interleave3(array1, array2) {
  let result = array1.map((_, idx) => [array1[idx], array2[idx]]).flat();

  console.log(result);
  return result;
}

// using  Array.prototype.reduce 
function interleave(array1, array2) {
  let result = array1.reduce((resultArray, _, idx) => {
    resultArray.push(array1[idx], array2[idx]);
    return resultArray;
  }, []);

  console.log(result);
}
