/**
 * 735291
 * 
 * iterate from count of String(num).length to >= 1
 * call rotateRightmostDigits on number, count = count
 * 
 * return the number 
 */
function rotateRightmostDigits(number, count) {
  let numArr = [...String(number)];
  let countDigit = numArr.splice(-count, 1);
  return +[...numArr, countDigit].join('');
}

function maxRotation(num) {
  for (let count = String(num).length; count > 0; count -= 1) {
    num = rotateRightmostDigits(num, count);
  }

  console.log(num);
  return num;
}


maxRotation(735291);          // 321579
maxRotation(3);               // 3
maxRotation(35);              // 53
maxRotation(105);             // 15 -- the leading zero gets dropped
maxRotation(8703529146);      // 7321609845