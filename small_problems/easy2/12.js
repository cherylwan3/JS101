/**
 * P------------------
 * - function takes an integer and converts it to a string representation.
 * - takes negative integers as well
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
  if (num < 0) {
    num *= -1;
    return `-${integerToString(num)}`;
  } else if (num === 0) {
    return "0"
  } else {
    return `+${integerToString(num)}`;
  };
}

// books method 
function signedIntegerToString1(number) {
  switch (Math.sign(number)) {
    case -1:
      return `-${integerToString(-number)}`;
    case +1:
      return `+${integerToString(number)}`;
    default:
      return integerToString(number);
  }
}



console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");