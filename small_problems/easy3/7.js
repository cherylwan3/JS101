/**
 * P---------------------
 * input: functionName (num)
 * output: num * 2, num (if num is a double num)
 * rules:
 * - double num: left side digits same as right-side digits
 * -ex. double num : 44, 3333, 103103
 * -NOT double num: 444, 334433, 107, 11333
 * 
 * A-----------------------
 * - functionName (num)
 *  - determine if num is a double num
 *   - set a variable 'doubleNum'
  *  - change num into a string: $numString
  *   - IF the length of numString's remainder 2 is equal to 0, 
  *     - set $leftSide to numString[0] to numString[numString's length / 2 - 1]
        - set $rightSide to numString[numString's length / 2 ] to end of numString
  *   - ELSE length of numString's remainder 2 is equal to 1
        - set $leftSide tonumString[Math.floor(numString's length /2) ]
        - set $rightSide to numString[Math.ceil(numString's length / 2)]

      -IF $leftSide is equal to $rightSide, 
        - num is 'doubleNum'
       - return 'doubleNum'
      - ELSE IF $leftSide !== $rightSide
        - return num * 2
 *        
*/

  
function isDoubleNum(num) {
  let numString = String(num);
  let center = Math.floor(numString.length / 2);
  let left = numString.slice(0, center);
  let right = numString.slice(center);

  return left === right;
}

function twice(num) {
  if (isDoubleNum(num)) {
    console.log(num);
    
    return num;
  } else {
    console.log(num * 2);
    
    return num * 2;
  }
}

// ex
twice(37);          // 74
twice(44);          // 44
twice(334433);      // 668866
twice(444);         // 888
twice(107);         // 214
twice(103103);      // 103103
twice(3333);        // 3333
twice(7676);        // 7676