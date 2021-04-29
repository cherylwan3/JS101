/**
 * P-----------------------
 * input: function (number)
 * output: boolean
 * rules:
 * - function returns true if integer argument is palindromic 
 * - palindromic number reads same forward and backward
 * A------------------------------
 * - change number to string 
 * - set a $reversedString to the string reversed 
 * - compare $reversedString to string 
 * - return the comparison
*/

function isPalindromicNumber (number) {
  console.log(isPalindrome(String(number)));
  
  return isPalindrome(String(number));
}

function isPalindrome(string) {
  return string === string.split('').reverse().join('');
}

// ex
isPalindromicNumber(34543);        // true
isPalindromicNumber(123210);       // false
isPalindromicNumber(22);           // true
isPalindromicNumber(5);            // true

