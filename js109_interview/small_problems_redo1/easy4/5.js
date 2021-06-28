/**
 * func (str)
 * returns true or false 
 * 
 * - case- insenstiive, ignore all non-alphanumeric characters
 * 
 * remove all non- alpanumeric a
 * lower case the string
 * call isPalindrome on string
 * return  
*/


function isRealPalindrome(str) {
  let lowerAlphaNumeric = [...str]
    .filter(char => {
      return  (char.toLowerCase() >= 'a' && char.toLowerCase() <= 'z') || 
              ([0, 1, 2, 3, 4, 5, 6, 7, 8, 9].includes(Number(char))); 
    })
    .map(char => char.toLowerCase())
    .filter(char => char !== ' ')
    .join(''); 

  
  console.log(isPalindrome(lowerAlphaNumeric));
  return isPalindrome(lowerAlphaNumeric);
}

function isPalindrome(string) {
  return string === string.split('').reverse().join('');
}

isRealPalindrome('madam');               // true
isRealPalindrome('Madam');               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
isRealPalindrome('356653');              // true
isRealPalindrome('356a653');             // true
isRealPalindrome('123ab321');            // false

