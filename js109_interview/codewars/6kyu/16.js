// persistent bugger
// https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/train/javascript

/**
func input: num
output: integer -  mult persist
- number of times you mult the digits in num until single digit


product = digit * digit * ...times

A--
- while String(num)'s length  > 1, 

  - strNum arr -> use map to turn it into digits
    => let digitArr = [...String(num)].map(str => +str);
    - reassign num to the product of its elements 
*/

function persistence(num) {
  let count = 0;

  while (String(num).length > 1) {
    count += 1;
    let digitArr = [...String(num)].map(str => +str);
    num = digitArr.reduce((total, digit) => total * digit);
  }

  return count;
}

console.log(persistence(39) === 3) // because 3*9 = 27, 2*7 = 14, 1*4=4
                       // and 4 has only one digit
                 
console.log(persistence(999) === 4) // because 9*9*9 = 729, 7*2*9 = 126,
                        // 1*2*6 = 12, and finally 1*2 = 2
                  
console.log(persistence(4) === 0) // because 4 is already a one-digit number