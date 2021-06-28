/**
 * integerToString (number) -> stringNum
 * Math.sign(4321) -> 1
 * Math.sign(-123) -> -1
 * Math.sign(0) -> 0
 * 
 * case 1
 *  return '+' + integertoString(num)
 * case -1
 *   num = num * -1
 *   return '-' + integertoString(num)
 * case 0
 *  return 0
*/

const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function integerToString(number) {
  let numString = '';

  do {
    let remainder = number % 10;
    number = Math.floor(number / 10);
    numString = DIGITS[remainder] + numString;
  } while (number > 0);

  return numString;
}

function signedIntegerToString(num) {
  switch (Math.sign(num)) {
    case 1:
      return '+' + integerToString(num);
    case -1:
      return '-' + integerToString(-num);
    case 0:
      return '0';
  }
}


console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");