/**
 * P ---------------------------------
 * Input: 2 strings as arguments to a function
 * Output: 1 string: shorter + longer + shorter 
 * - write a function, 2 strings as arguments
 *    - determines longer of 2 strings
 *    - returns result of concatenating the shorter string, longer string, and 
 *      shorter string again
 * - assume strings are different lengths 
 * 
 * E----------------------------------
 * shortLongShort('abc', 'defgh');    // "abcdefghabc"
 * shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
 * shortLongShort('', 'xyz');         // "xyz"
 * 
 * D/A ---------------------------
 * 
 * - write a function named shortLongShort with arguments: string1 and string2
 *    - declare variables shortStr and longStr
 *    -  if the length of string1 > length of string 2, assign string1 to the variable 
 *    longStr and assign string2 to the variable shortStr,
 *        - else, assign string1 to shortStr and str2 to longstr
 *    - declare a variable called resultStr
 *    - set resultStr to 'shortStr' + 'longstr' + 'shortStr'
 *    - return resultStr
 */

function shortLongShort(string1, string2) {
  let shortStr;
  let longStr;
  let resultStr;

  if (string1.length > string2.length) {
    longStr = string1;
    shortStr = string2
  } else {
    longStr = string2;
    shortStr = string1;
  }

  resultStr = shortStr + longStr + shortStr;
  return resultStr;
}

console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
console.log(shortLongShort('', 'xyz'));         // "xyz"

// book's answer:
function shortLongShort1(string1, string2) {
  if (string1.length > string2.length) {
    return string2 + string1 + string2;
  } else {
    return string1 + string2 + string1;
  }
}