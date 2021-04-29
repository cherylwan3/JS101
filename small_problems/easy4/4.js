/**
 * P-------------------
 * input: function (string)
 * output: boolean
 * -returns true if string is palindrome, false otherwise
 * - palindrome: reads same forwards and backwards
 *    - case and all characters matter
*/

function isPalindrome(string) {
  let result = (string === string.split('').reverse().join(''));
  
  console.log(result);
  return result;
}



// ex
isPalindrome('madam');               // true
isPalindrome('Madam');               // false (case matters)
isPalindrome("madam i'm adam");      // false (all characters matter)
isPalindrome('356653');              // true