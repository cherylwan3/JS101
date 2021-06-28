/** 35 minutes
 * P------------------
 * rules:
 * - given non empty string, lower case
 * - can repeated substring construct the given string
 * 
 * E----------------------
 * 'ababab' -> true 
 * - true: 
 * A----------------
 * - iterate through string, from length of 1 to string's length
 * - repeat the string until its up to string's length, to see if it matches the given string
 * 
 * - iterate through given str from index 1 to str's length
 *    - get a copy of @str from index 0 to current index -> @substr
 *    - find out @substr's  length -> @substrLength
 *    - divide @substrLength by given @str's length -> assign to @repeatLength
 *    - assign @repeatSubStr to repeating @substr @repeatLength amount of times
 *    - compare @repeatSubStr to @substr to see if they are the same
 *      - if same, return true
 * - return false
*/
console.log(repeatedSubStringPattern('abab') === true) // true
console.log(repeatedSubStringPattern('aba') === false) // true
console.log(repeatedSubStringPattern('aabaaba') === false) // true
console.log(repeatedSubStringPattern('abaababaab') === true) // true
console.log(repeatedSubStringPattern('abcabc') === true) // true

function repeatedSubStringPattern(str) {
  for (let endIdx = 1; endIdx < str.length; endIdx += 1) {
    let subStr = str.slice(0, endIdx);
    subStr = subStr.repeat(str.length / subStr.length);
    if (subStr === str) return true;
  }

  return false;
}