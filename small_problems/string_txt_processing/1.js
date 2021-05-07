/**
 * P-------------------
 * input: func (str)
 * output: boolean
 * rules:
 * - returns true if all of the alphabetic characters inside the string are 
 *    uppercase; false otherwise
 * - Ignore characters that are not alphabetic.
 * D/A----------------------------
 * - iterate over strArr
 *  - check to see if its an alphabetic char
 *   - check to see if its uppercase
*/

// ex
isUppercase('t');               // false
isUppercase('T');               // true
isUppercase('Four Score');      // false
isUppercase('FOUR SCORE');      // true
isUppercase('4SCORE!');         // true
isUppercase('');                // true

// my silly long solution
function isUppercase(str) {
  return [...str].filter(char => {
    return (char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z');
  }).every(letter => letter === letter.toUpperCase());
}

// book method
function isUppercase(string) {
  return string.toUpperCase() === string;
}