/**
 * P---------------------
 * input: numbers, number
 * output: number
 * rules:
 * - function (number, count)
 * - rotates last @count digits of @number
 * - leave first digits (not part of rotation) in same order
 * - slice off the @count digit (counting from end of @number)
 * - append @count digit to end of @number
 * D------------------
 * - string, array
 * A-----------------
 * - convert @number to string, then split to array -> @numStrArr
 * - remove the @count stringNumber and set it to -> @countNum
 * - append @countNum to end of @numStrArr
 * - join @numStrArr together, convert it to a number and return the number
 * 
*/

// E: test cases
console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917

// my solution
function rotateRightmostDigits(number, count) {
  let numArr = [...String(number)];
  let countDigit = numArr.splice(-count, 1);
  return +[...numArr, countDigit].join('');
}

// me + book solution
function rotateRightmostDigits1(number, count) {
  let numStr = String(number);
  let firstPart = numStr.slice(0, -count);
  let rotatePart = numStr.slice(-count);
  let resultStr = firstPart + rotateString(rotatePart);

  return Number(resultStr);
}

function rotateString(string) {
  return string.slice(1).concat(string[0]);
}
