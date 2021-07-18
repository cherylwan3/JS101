// Backspaces in string
// https://www.codewars.com/kata/5727bb0fe81185ae62000ae3

/**
 * P---
 * input: str
 * output: str
 * 
 * A---
 * - turn the str into arr
 * - while arr includes backspace symbol
 *     - delete arr's backspace plus element before it
 * - join arr together into resultStr
 * - return resultStr
 * 
*/

function cleanString(str) {
  let arr = [...str];

  while (arr.includes('#')) {
    let idx = arr.indexOf('#');

    if (idx <= 0) {
      arr.splice(idx, 1);
    } else {
      arr.splice(idx - 1, 2);
    }
  }

  console.log(arr.join(''));
  return arr.join('');
}


cleanString("abc#d##c"); // ac
cleanString("abc##d######" ) // ''
cleanString('##') // ''
cleanString('') // ''