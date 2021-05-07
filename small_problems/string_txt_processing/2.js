/**
 * P-------------------
 * input: array 
 * output: different array
 * rules:
 * - takes an array of strings
 * - returns an array of the same string values
 *    - but with all vowels (a, e, i, o, u) removed.
 * D/A----------------------------
 * - create @resultArr, set it to []
 * - start loop:iterate over @array , 
 *    - for each element @str , convert @str to an array -> @strArr
 *    - start inner loop: iterate over @strArr
 *      - if each @letter of @strArr isn't equal to a vowel, return the letter
 *    - end inner loop
 *    - join @strArr together and return @str
 * - end outer loop
 * - append @return value of outer loop to @resultArr
 * - return @resultArr
*/

// my solution
function removeVowels(array) {
  return array.map(str => [...str].filter(char => {
    return !('aeiouAEIOU'.includes(char));
  }).join(''));
}

// book similar sol
function removeVowels1(array) {
  return array.map(str => [...str].filter(char => {
    return notVowel(char);
  }).join(''));
}

function notVowel(char) {
  const VOWELS = ['a', 'e', 'i', 'o', 'u'];
  return !VOWELS.includes(char.toLowerCase());
}

// shortest
function removeVowels2(strings) {
  return strings.map(string => string.replace(/[aeiou]/gi, ""));
}

// ex
removeVowels(['abcdefghijklmnopqrstuvwxyz']);         // ["bcdfghjklmnpqrstvwxyz"]
removeVowels(['green', 'YELLOW', 'black', 'white']);  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]
