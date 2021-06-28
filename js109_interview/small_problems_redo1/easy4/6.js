/**
 * turn num to str -> numStr
 * reverse string and check against numStr
 */

isPalindromicNumber(34543);        // true
isPalindromicNumber(123210);       // false
isPalindromicNumber(22);           // true
isPalindromicNumber(5);            // true


function isPalindromicNumber(num) {
  console.log(String(num) === String(num).split('').reverse().join(''));
  return String(num) === String(num).split('').reverse().join();
}