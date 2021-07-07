/**
 * iterate over str, every char, using map
 *  return char lower cased 
 * 
 * filter for letters
 * 
 * => testStr 
 * call isPalindrome on testStr
 */

function isPalindrome(str) {
  return [...str].reverse().join('') === str;
}

function isRealPalindrome(str) {
  str = [...str]
    .map(char => char.toLowerCase())
    .filter(char => isLetter(char))
    .join('');
  let result = isPalindrome(str);

  console.log(result);
  return result;
}

function isLetter(char) {
  return char >= 'a' && char <= 'z';
}

isPalindrome('madam');               // true
isRealPalindrome('Madam');               // true (case does not matter)
isRealPalindrome("Madam, I'm Adam");     // true (only alphanumerics matter)
isRealPalindrome('356653');              // true
isRealPalindrome('356a653');             // true
isRealPalindrome('123ab321');            // false