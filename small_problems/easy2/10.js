/**
 * P -------------------------
 * input: function with string argument 
 * output: number 
 * - function returns number in the string 
 * - if + leading sign, returned number should be positve
 * - if - leading sign, returned number should be negative 
 * A -------------------------
 * - code the  stringTOInteger function
 * - change the function:
 *  - if string starts with a signed integer, remove it from string 
 *  - if string starts with '-', multiply finalNum by negative 1
 *    before returning finalNum 
 */

 function stringToSignedInteger1(stringOfDigits) {
  const DIGITS = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9
  };

  let arrayOfDigits = stringOfDigits.split('').map(char => DIGITS[char]);
  if (arrayOfDigits.findIndex(element => element === undefined) === 0) {
    arrayOfDigits.shift();
  }

  let finalNum = 0;
  arrayOfDigits.forEach(digit => finalNum = (10 * finalNum) + digit);
  if (stringOfDigits.startsWith('-')) {
    finalNum *= -1;
  } 
  return finalNum;
}


function stringToInteger(stringOfDigits) {
  const DIGITS = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9
  };
  let arrayOfDigits = stringOfDigits.split('').map(char => DIGITS[char]);
  let finalNum = 0;
  arrayOfDigits.forEach(digit => finalNum = (10 * finalNum) + digit);
  return finalNum;
}

function stringToSignedInteger(stringOfDigits) {
  switch(stringOfDigits[0]) {
    case '+':
      return stringToInteger(stringOfDigits.slice(1));
    case '-':
      return -stringToInteger(stringOfDigits.slice(1));
    default: 
      return stringToInteger(stringOfDigits);
  } 
}

console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true

