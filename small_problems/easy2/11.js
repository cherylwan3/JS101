/**
 * P --------------------
 * -input: function (num)
 * -output: string (stringNum)
 * - function converts non-negative number to string representation of that number
 * - can't use standard conversion in String(), Number.prototype.toString, 
 *   or an expression such as '' + number
 * - construct the string by analyzing and manipulating the number
 * 
 */

const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function integerToString(number) {
  let numString = '';

  do {
    let remainder = number % 10;
    number = Math.floor(number / 10);
    console.log(numString);
    numString = DIGITS[remainder] + numString;
  } while (number > 0);
  
  console.log(numString);
  return numString;
}


// examples
integerToString(4321);        // "4321"
integerToString(0);           // "0"
integerToString(5000);        // "5000"
integerToString(1234567890);  // "1234567890"