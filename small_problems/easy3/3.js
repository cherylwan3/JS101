/**
 * P----------------------
 * - a function that takes one argument, a positive integer, 
 * - and returns a string of alternating '1's and '0's, always starting with a '1'. 
 * -The length of the string should match the given integer.
 * 
 * A ---------------------
 * - stringy(num)
 *  - Set an array 'stringArray' to ['1']
 *  - start a loop with index of 0; less than or equal to num; index +=1
 *    -If stringArray[index - 1] is equal to '1', set stringArray[index] to '0'
 *    - else 
 *        - set stringArray[index] to '1'
 *  - join the stringArray together to string
    - return string
 *  - 
 */

 function stringy(size) {
  let stringArray = ['-1'];

  for (let index = 0; index < size; index += 1) {
    let num = (stringArray[index - 1] === '1') ? '0': '1';
    stringArray[index] = num;
  }
  let result = stringArray.join('');
  
  console.log(result);
  return result;
}

// book's method
function stringy1(size) {
  let result = "";
  for (let idx = 0; idx < size; idx += 1) {
    let number = ((idx % 2) === 0) ? 1 : 0;
    result += number;
  }
  return result;
};



stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"