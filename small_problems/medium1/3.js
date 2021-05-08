/**
 * P---------------------
 * input: func (integer)
 * output: integer
 * rules:
 * - maxRotation function
 *   - 
 * D------------------
 * - for number 735291 (6 digits)
 * - removes first digit and append it to end of number
 * - remove second digit, and append it to end of num
 * - remove 3rd digit and append it to end of num
 * - keep first 4 digits, move number's length - 1's digit to end of number
 * A-----------------
 * - convert the @number to a string -> @strNm
 * - iterate over @strNum, from @idx 0  to @strNum 's length
 *    - count = strNum.length - @idx
 *    - set @number to calling rotateRightmostDigit(@number)
 *    return @number
 * 
*/

// E: test cases
maxRotation(735291);          // 321579
maxRotation(3);               // 3
maxRotation(35);              // 53
maxRotation(105);             // 15 -- the leading zero gets dropped
maxRotation(8703529146);      // 7321609845

function rotateRightmostDigits(number, count) {
  let numArr = [...String(number)];
  let countDigit = numArr.splice(-count, 1);
  return +[...numArr, countDigit].join('');
}

function maxRotation1(number) {
  [...String(number)].forEach((_, idx) => {
    let count = String(number).length - idx;
    number = rotateRightmostDigits(number, count);
  });

  console.log(number);
  return number;
}

// book method 
function maxRotation(number) {
  let numLength = String(number).length;
  for (let count = numLength; count >= 2; count -= 1) {
    number = rotateRightmostDigits(number, count);
  }
  console.log(number);
  return number;
}