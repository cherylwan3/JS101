// https://www.codewars.com/kata/5894318275f2c75695000146
// Simple Fun #79: Delete a Digit

/**
 * P--
 * input: integer n
 * output: integer - max number you can get by deleting 1 digit
 * 
 * 145 45 54
 * 
 * A------
 * turn n into str, then an array
 * use map to turn all str to numbers
 * 
 * - declare result
 * iterate over numArr at each indx
 *  - create a slice of numArr
 *  - delete idx from numArrCopy
 *    - join the numArrCopy together into a string
 *    - turn string into a number
 *       - reassign result to number if num > result
*/

function deleteDigit(n) {
  let numArr = [...String(n)].map(char => +char);
  let result = 0;

  numArr.forEach((_, idx) => {
    let numArrCopy = numArr.slice();
    numArrCopy.splice(idx, 1);
    let num = +numArrCopy.join('');
    if (num > result) result = num;
  });

  return result;
}

console.log(deleteDigit(152)); //,52
console.log(deleteDigit(1001)); // ,101)
console.log(deleteDigit(10)); // ,1)