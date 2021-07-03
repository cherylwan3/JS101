/* eslint-disable max-lines-per-function */
/**
 * funct (str)
 * outputs: string w/ numWord converted to digit
 * 
 * const DIGITS = {}
 * split the str into wordArr
 * iterate over wordArr using map
 *  - if word === numWord, get the corresponding digit and return it
 * join wordArr into string and return string
*/

// longer solution
/* const DIGITS = {
  zero: 0,
  one : 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
}

function wordToDigit(str) {
  let wordStr = str.split(' ')
    .map(word => {
      let endPunc = word[word.length - 1];
      if (!isLetter(endPunc)) {
        word = removeEndPunc(word);
      }

      if (DIGITS.hasOwnProperty(word)) {
        return isLetter(endPunc) ? DIGITS[word] : DIGITS[word] + endPunc;
      }

      return isLetter(endPunc) ? word : word + endPunc;
    })
    .join(' ');

  console.log(wordStr);
  return wordStr;
}

function isLetter(char) {
  return char.toLowerCase() >= 'a' && char.toLowerCase() <= 'z';
}

function removeEndPunc(word) {
  return word.slice(0, word.length - 1);
}
 */
//wordToDigit('Please call me at five five five one two three four. Thanks.');
// "Please call me at 5 5 5 1 2 3 4. Thanks."

const DIGIT_ARR = ['zero','one','two','three','four',
'five','six', 'seven','eight','nine'];

function isLetter(char) {
  return char.toLowerCase() >= 'a' && char.toLowerCase() <= 'z';
}

function wordToDigit1(str) {
  let wordStr = str.split(' ')
    .map(word => {
      let endPunc = word[word.length - 1];
      let digit;
      if (!isLetter(endPunc)) {
        digit = DIGIT_ARR.indexOf(word.toLowerCase().slice(0, -1));
        return digit >= 0 ? digit + endPunc : word;
      } else {
        digit = DIGIT_ARR.indexOf(word);
        return digit >= 0 ? digit : word;
      }
    })
    .join(' ');

  console.log(wordStr);
  return wordStr;
}


wordToDigit1('Please call me at five five five one two three four. Thanks.');
// "Please call me at 5 5 5 1 2 3 4. Thanks."