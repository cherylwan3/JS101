/**
 * P--------------------------
 * intput: swap(string)
 * outut: string
 * - write function that swaps first and last letters of every word 
 * - assume every word has at least one letter
 * - string will always contain at least one word 
 * - string contains only words and spaces
 * 
 * A-------------------------
 * function swap (string)
 * - change the string into an array of words -> $wordsArray
 * - in every $word in $WordsArray, swap the first and last letter
 *    -split $word 
 *      - SET $firstLetter to $word[0]
 *      - SET $lastLetter to $word[length - 1]
 *      - $wordArray[0] = $lastLetter
 *      -$wordArray[length - 1] = $firstLetter
 *    - join $wordArray together -> $word and return $word
 *    
 * - join the $wordsArray into a string -> $swappedString
 * - return $swappedString
 */

/* // more confusing 
function swap1(string) {
  let result = string.split(' ').map(word => {
    let wordArray = word.split('');

    let firstChar = wordArray[0];
    let secondChar = wordArray[word.length - 1];
    
    wordArray[0] = secondChar;
    wordArray[word.length - 1] = firstChar;

    return wordArray.join('');
  }).join(' ');

  console.log(result);
  return result;
} */

// book's solution but using map
function swap(words) {
  let result = words.split(' ').map(word => {
    return swapFirstLastCharacters(word);
  }).join(' ');
 
  console.log(result);
  return result;
}

function swapFirstLastCharacters(word) {
  if (word.length === 1) {
    return word;
  }

  return word[word.length - 1] + word.slice(1, -1) + word[0];
}

swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
swap('Abcde');                          // "ebcdA"
swap('a');                              // "a"