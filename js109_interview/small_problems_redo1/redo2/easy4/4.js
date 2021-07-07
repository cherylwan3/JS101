isPalindrome('madam');               // true
isPalindrome('Madam');               // false (case matters)
isPalindrome("madam i'm adam");      // false (all characters matter)
isPalindrome('356653');              // true

function isPalindrome(str) {
  let result = [...str].slice().reverse().join('') === str;
  
  console.log(result);
  return result;
}