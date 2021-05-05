/**
 * P-------------------------
 * input: func (num1, num2)
 * output: array
 * rules: 
 * - num1 is a count
 * - second is the starting number of a sequence that your function will create. 
 * - The function should return an array 
 *   containing the same number of elements as the count argument
 * - The value of each element should be a multiple of the starting number.
 * - assume that the count argument will always be an integer greater than or equal to 0
 * - the starting number can be any integer. 
 * - if the count is 0, the function should return an empty array.

 * D/A------------------------
- function declaration
- declare @result variable and set it to an empty array with 5 items 
- iterate over @result for every element, 
    -multiply @idx + 1 by startNum
    - push the result from above to @result array
- return @result
*/

function sequence(count, startNum) {
  let result = [...Array(count)].map((_, idx) => (idx + 1) * startNum);

  //console.log(result);
  return result;
}



// ex
sequence(5, 1);          // [1, 2, 3, 4, 5]
sequence(4, -7);         // [-7, -14, -21, -28]
sequence(3, 0);          // [0, 0, 0]
sequence(0, 1000000);    // []