/**
 * P-------------------
 * input: function (string)
 * output: boolean
 * rules:
 * - returns true if palindrome
 * -function is case-insensitive & ignore all non-LetterNumber characters
 * - may call isPalindrome()
 * 
 * A---------------------
 * function isRealPalindrome(string)
 * - set string1 variable to '';
 * - start a loop with index of 0, index < string's length, index +=1
 *  - if the string[index] is a letter or number (LetterNumber func), 
 *      - lower case the string[index]
 *      - add it to string1
 * - set stringReverse to string1 reversed
 * - return isPalindrome(string1, stringReverse);
 * 
 * - LetterNumber function (string[index]) 
 *    
*/
function isRealPalindrome1(string) {
  string = removeNonLetterNumbers(string.toLowerCase());
  console.log(isPalindrome(string));
  return isPalindrome(string);
}

function removeNonLetterNumbers(string) {
  let result = '';
  
  for (let idx = 0; idx < string.length; idx += 1) {
    if (isLetter(string[idx]) || isNumber(string[idx])) {
      result += string[idx];
    }
  }

  return result;
}

function isLetter(char) {
  return char >= 'a' && char <= 'z';
}

function isNumber(char) {
  return char >= '0' && char <= '9';
}   

function isPalindrome(string) {
  return string === string.split('').reverse().join('');
}

// shorter method
function isRealPalindrome(string) {
  string = string.toLowerCase().replace(/[^a-z0-9]/g, "");
  console.log(isPalindrome(string));
  return isPalindrome(string);
}

//ex
isRealPalindrome('madam');               // true
isRealPalindrome('Madam');               // true (case does not matter)
isRealPalindrome("Madam, I'm Adam");     // true (only alphanumerics matter)     
isRealPalindrome('356653');              // true
isRealPalindrome('356a653');             // true
isRealPalindrome('123ab321');            // false