/**
 * rotates last @count digits of @number
 * move first of digits to the end, 
 * then shift remaining digits to the left
 * E---------
 * 735291, 4
 * A-----------
 * - String(number) -> strNumber
 * - let idx = strNumber.length - count ;
 * - strNumber + strNumber(idx)
 * - strNumber.splice(idx,1)
 */
rotateRightmostDigits(735291, 1);      // 735291
rotateRightmostDigits(735291, 2);      // 735219
rotateRightmostDigits(735291, 3);      // 735912
rotateRightmostDigits(735291, 4);      // 732915
rotateRightmostDigits(735291, 5);      // 752913
rotateRightmostDigits(735291, 6);      // 352917


function rotateRightmostDigits(num, count) {
  let arrNum = [...String(num)];
  let idx = arrNum.length - count;

  arrNum.push(arrNum[idx]);
  arrNum.splice(idx, 1);
  let result = Number(arrNum.join(''));

  console.log(result);
  return result;
}

function rotateRightmostDigits1(number, count) {
  let numArr = [...String(number)];
  let countDigit = numArr.splice(-count, 1);
  return +[...numArr, countDigit].join('');
}