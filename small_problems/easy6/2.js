/**
 * P-------------------------
 * input: function (string) 
 * output: string
 * rules:
 * - doubles every consonant character in the string
 * - returns result in new string
 * - consonant = non- vowel
 * D/A------------------------
 * vowels = [a, e, i , o , u]
 * 
 * - split the string at ('') to an array
 * - set @resultArr to [];
 * - iterate over @stringArr from @idx 0 to string.length 
 *    - if current element isn't included in vowels array
 *    - push current element + current element to @resultArr
 * - return resultArr. join back to string with ('')
 */
 



const VOWELS = ['a', 'e', 'i' , 'o' , 'u'];

function doubleConsonants(string) {
  let result = string.split('').map(char => {
    if (!VOWELS.includes(char) && isAlphabet(char)) {
      return char.repeat(2);
    } else {
      return char;
    }
  }).join('');
  
  console.log(result);
  return result;
}

function isAlphabet(char) {
  return (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z');
}

// ex
doubleConsonants('String');          // "SSttrrinngg"
doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
doubleConsonants('July 4th');        // "JJullyy 4tthh"
doubleConsonants('');                // "" 
 
