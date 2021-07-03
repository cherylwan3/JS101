/**
 * using rotateRightmostDigits(number, count)
 * 735291 -> 352917
 * - count = String(number).length 
 * - rotates str[0] -> 1 digit to the end 
 * 352917 -> 329175
 * - count = String(number).length - 1
 * 329175 -> 321759
 * - count = String(number).length - 2
 * - rotates str[2] -> 1 digit to the end
 * 321759 -> 321597
 * - count = String(number).length - 3
 * - rotates str[3] -> 1 digit to end 
 * 321597 -> 321579
 * - count = String(number).length - 4
 * - rotates str[4] -> 1 digit to end 
 * 
 * A-----
 * iterate over String(number) from strNum.length to 2
 *  if count ===  strNum.length - 1 continue
 *  number = maxRotation(number, count)
 * 
 * return number
 */

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

function maxRotation(number) {
  let length = String(number).length;
  for (let count = length; count >= 2; count -= 1) {
    number = rotateRightmostDigits(number, count);
  }

  console.log(number);
  return number;
}
