/**
 * func in: string of digits
 * func/out: number with leading sign
 * - if no sign, return positive numb
 * A---
 * - func(str)
 * -get the char at index 0 of string
 * - check if it has - or + sign, if it does, remove it from @str
 *  - call stringToInteger with @str passed to it -> @resultNum
 *  - if it's a - sign, 
 *    - multiply @resultNum by -1 
 *  - if + sign
 *    - return resultNum 
 * - call stringToInteger with @str passed to it -> @resultNum
 *    - return @resultNum
**/ 
function stringToInteger(stringOfDigits) {
  let digitsStrArray = stringOfDigits.split('');
  let numArray = digitsStrArray.map(digitInString => {
    for (let num = 0; num < 10; num +=1 ) {
      if (digitInString == num) return num;
    }
  });

  let finalNum = 0;
  numArray.forEach(digit => finalNum = (10 * finalNum) + digit);
  return finalNum;
}

// recent sol
function stringToSignedInteger(str) {
  if (str[0] === '-' || str[0] === '+') {
    let sign = str[0];
    str = str.slice(1);
    let resultNum = stringToInteger(str);
    switch(sign) {
      case '-':
        resultNum *= -1;
        return resultNum;
      case '+':
        return resultNum;
    }
  }

  return stringToInteger(str);
}

// simpler method 
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