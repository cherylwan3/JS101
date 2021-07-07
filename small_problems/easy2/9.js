/**
 * P -------------------------
 * input: stringToInteger("string of digits") 
 * output: number
 * rules:
 * -function takes a string of digits
 * - function returns the appropriate number
 * - function doesn't use parseInt() or Number()
 * -assume all numbers will be numeric
 * - can't use any standard conversion methods in String() or Number()
 * - calculate result by analyzing the characters in the string 
 */

function stringToInteger(stringOfDigits) {
  let digitsStrArray = stringOfDigits.split('');
  let numArray = digitsStrArray.map(digitInString => {
    for (let num = 0; num < 10; num += 1) {
      if (digitInString == num) return num;
    }
  });

  let finalNum = 0;
  numArray.forEach(digit => finalNum = (10 * finalNum) + digit);
  return finalNum;
}

// ex
console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true 

// book's solution:
function stringToInteger1(stringOfDigits) {
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

// ex
console.log(stringToInteger1("4321") === 4321); // logs true
console.log(stringToInteger1("570") === 570); // logs true
