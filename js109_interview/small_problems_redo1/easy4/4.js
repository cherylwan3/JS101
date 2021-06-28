/**
 * E----
 * 'madam'
 * str.length / 2 -> 2.5
 * str.slice(0, Math.floor(2.5)) -> 'ma'
 * str.slice(Math.ceil(2.5)) -> 'am'
 * 
 * 'abab'
 * str.length / 2 -> 2
 * str.slice(0, Math.floor(2)) -> 'ab'
 * str.slice(2) -> 'ab'
 * 
 * A-------
 * get firstHalf
 * get secondHalf
 * compare the two
 * 
*/
isPalindrome('madam');               // true
isPalindrome('Madam');               // false (case matters)
isPalindrome("madam i'm adam");      // false (all characters matter)
isPalindrome('356653');              // true


/* function isPalindrome(str) {
  let midLength = str.length / 2;

  let firstHalf = str.slice(0, Math.floor(midLength));
  let secondHalf = str.slice(Math.ceil(midLength)).split('').reverse().join('');

  console.log(firstHalf === secondHalf);
  return firstHalf === secondHalf;
}
 */


// better
function isPalindrome(string) {
  let result = (string === string.split('').reverse().join(''));
  
  console.log(result);
  return result;
}