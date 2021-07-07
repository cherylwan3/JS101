/* eslint-disable max-statements */
/* eslint-disable max-lines-per-function */
/* eslint-disable max-len */
/**
 * split the string into arrayWords
 * letterDigit object
 * iterate over arrayWords using map
 *  => iterate over every word, split it into aray -> wordArr
 *    - if word[last index] IS NOT a letter (ends with '.')
 *        - get the word at index 0 to word.length - 2
 *            -check if word is a key in letterDigit object
 *             if it is, get the digit and return digit + '.'
 *              if it isn't return the word
 *    - if word[last index] is a letter
 *      - check if word is a key in letterDigit object
 *          if it is, get the digit and return digit
 *          if it isn't return the word
 *    
*/

const LETTER_DIGIT = {
  zero: 0,
  one: 1,
  two: 2,
  three : 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
};

function wordToDigit(str) {
  let arrayWords = str.split(' ');
  let newStr = arrayWords
    .map(word => {
      let wordArr = [...word];
      let length = wordArr.length;
      let endChar = wordArr[length - 1];
      let digitWord;
      let digit;

      if (!isLetter(endChar)) {
        digitWord = word.slice(0, length - 1);
        digit = LETTER_DIGIT[digitWord];
        return digit ? digit + endChar : word;
      } else {
        digit = LETTER_DIGIT[word];
        return digit ? digit : word;
      }
    })
    .join(' ');

  console.log(newStr);
  return newStr;
}

function isLetter(char) {
  return char >= 'a' && char <= 'z';
}

wordToDigit('Please call me at five five five one two three four. Thanks.');
 // "Please call me at 5 5 5 1 2 3 4. Thanks."