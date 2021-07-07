/**
 * func(num) 
 * returns: str
 * 
 * create an array ['0', '1', '2', '3', '4', '5', '6,']
 * 
 * E: 4321
 * 
 * returnStr = ''
 * while num > 0
 *   num = 4321
 *    remainder = 4321 % 10
 * add the array[remainder] to the returnStr
 *   num = (4321 - remainder) / 10
 *  
 */

const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function integerToString(num) {
  let resultStrNum = '';

  do {
    let remainder = num % 10;
    resultStrNum = DIGITS[remainder] + resultStrNum;
    num = (num - remainder) / 10;
  } while (num > 0);

  return resultStrNum;
}


console.log(integerToString(4321));        // "4321"
console.log(integerToString(0));           // "0"
console.log(integerToString(5000));        // "5000"
console.log(integerToString(1234567890));  // "1234567890"