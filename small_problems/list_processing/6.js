/**
 * P---------------------
 * input: func(string)
 * output: array
 * rules:
 * -func returns a list of all palindromic substrings of a string. 
 * - substring must consist of a sequence of characters 
 *    that reads the same forward and backward
 * - substrings should be sorted by their order of appearance in input string.
 * - Duplicate substrings should be included multiple times
 * - you may (and should) use the substrings function
 * - For the purpose of this exercise, you should consider all characters and pay attention to case; 
 *  that is, 'AbcbA' is a palindrome, but 'Abcba' and 'Abc-bA' are not
 * - assume that single characters are not palindromes.


 * D/A-------------------
 * - declare func
 * - declare @result and set it to []
 * - call substrings on str to return all substrings -> @subStrArr
 * - start loop: iterate over @subStrArr
 *    - call isPalindrome with @subStrArr 's element
 *     - if it returns true, append @subStrArr 's element to @result
    - end loop
 * - return result
 * 
 * isPalindrome function -------------------------
 * - argument is @subStr
 * - @reverseStr = convert substr to an array, reverse the array, join it back
 * - if subStr is equal to @reverseStr and if substr's length > 1
 *    - return true
 *  - else, return false 
*/

function leadingSubstrings(str) {
  return [...str].map((_, idx) => str.slice(0, idx + 1));
}

function substrings(str) {
  return [...str].reduce((arr, _, idx) => {
    return arr.concat(leadingSubstrings(str.slice(idx)));
  }, []);
}

function isPalindrome(word) {
  return (word === [...word].reverse().join('')) && (word.length > 1);
}

function palindromes(str) {
  return substrings(str).filter(word => isPalindrome(word));
}



// ex
console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]