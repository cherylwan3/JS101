/**
 * 4321 -> '4321'
 * func/in: number
 * func/out: str
 * E----
 * 4320 / 10 -> 432
 * 430 / 10 -> 43
 * 40 / 10 -> 4
 * 4 % 10 -> 4
 * 
 * 
 * A----
 * func (num)
 * - while num > 0
 *  - get the remainder of num / 10
 *  - get the matching char from letterNum object 
 *     - append this string char to resultStr
 *  - divide num by 10
 * 
*/
const letterNum = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function integerToString(num){
  let resultStr = '';
  
  do {
    let remainder = num % 10;
    resultStr = letterNum[remainder] + resultStr;
    num -= remainder;
    num /= 10;
  } while (num > 0);

  return resultStr;
}

// better
const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function integerToString(number) {
  let numString = '';

  do {
    let remainder = number % 10;
    number = Math.floor(number / 10);
    numString = DIGITS[remainder] + numString;
  } while (number > 0);
  
  console.log(numString);
  return numString;
}


console.log(integerToString(0));           // "0"
console.log(integerToString(5000));        // "5000"
console.log(integerToString(1234567890));  // "1234567890"  