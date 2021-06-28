/**
 * swaps first and last letters of each owrd
 * A---
 * - split string -> @arrOfWords
 * => split @word -> @arrOfChar 
 *  -> for each @char swap 
 *  - get first letter
 *  - get last letter
 *  - slice the middle two
 *  - append all into new word -> new Word
 */

swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
swap('Abcde');                          // "ebcdA"
swap('a');                              // "a"


function swap(str){
  let resultStr = str
    .split(' ')
    .map(word => {
      let arrChar = [...word];
      let lastIdx = arrChar.length - 1;
      [arrChar[0], arrChar[lastIdx]] = [arrChar[lastIdx], arrChar[0]];
      return arrChar.join('');
    })
    .join(' ');

    console.log(resultStr);
}

// book's solution 
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