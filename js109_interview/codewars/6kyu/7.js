/* eslint-disable max-lines-per-function */
// reverse or rotate 
// https://www.codewars.com/kata/56b5afb4ed1f6d5fb0000991

/**
 * func(str -of digits, chunking size)
 * return: str
 * 1) reverse the digits
 * - 123456 -> ( 1 ^ 3 + 2 ^ 3 ) / 2
 * - cubes of digits summed is divisible by 2
 * 2) rotate the first digit to the end 
 * 
 * A--
 * declare resultStr ''
 * iterate through the str, idx 0, increment by sz
 *  - use slice to get str from idx to idx + sz
 * if str's length === sz, proceed, 
 *  - convert str to an array -> arr
 *    - check whether reverse or rotate array
 *    - if reverse array
 *      - reverse arr, join together, then append to result 
 *    - if rotate array
 *      - move first element to the end, join together, then append to result
*/


function revrot(str, sz) {
  let result = '';
  if (sz <= 0 || str === '') return '';

  for (let idx = 0; idx < str.length; idx += sz) {
    let subStr = str.slice(idx, idx + sz);
    let arr = [...subStr];
    if (arr.length === sz) {
      if (doRev(arr)) {
        result += arr.reverse().join('');
      } else {
        result += subStr.slice(1) + subStr[0];
      }
    }
  }

  //console.log(result);
  return result;
}

function doRev(arr) {
  let num = arr.reduce((total, num) => total + (num ** 3), 0);

  return num % 2 === 0;
}


revrot("123456987654", 6) // --> "234561876549"
revrot("123456987653", 6) //--> "234561356789"
revrot("66443875", 4) //--> "44668753"
revrot("66443875", 8) // --> "64438756"
revrot("664438769", 8) // --> "67834466"
revrot("123456779", 8)// --> "23456771"
revrot("", 8) //--> ""
revrot("123456779", 0)// --> "" 
revrot("563000655734469485", 4)// --> "0365065073456944"