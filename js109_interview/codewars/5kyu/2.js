// Simple Pig Latin
// https://www.codewars.com/kata/520b9d2ad5c005041100000f
/**
 * input: func(str- words)
 * return: str
 * - move 1st letter to end of word
 * - add 'ay' to end of word
 * - punc untouched
 * 
 * D-----------
 * 'Pig!'
 *
 * A------------
 * split str to array of words => arrWords = str.split(' ')
 * use map with arrWords
 *  - for every word, split the word into array of char
 *     - if every char is a letter
 *     - then, 
 *        - move 1st letter to end of word
 *        - append 'ay' to the end of te new word
 *  join the arrWords together with ' '
 * 
 * 
*/

function pigIt(str) {
  let arrWords = str.split(' ');

  let returnStr = arrWords
    .map(word => {
      if ([...word].every(char => isLetter(char))) {
        word = word.slice(1) + word[0] +  'ay';
      }
      return word;
    })
    .join(' ');

  return returnStr;
}

function isLetter(char) {
  let testChar = char.toLowerCase();
  return testChar >= 'a' && testChar <= 'z';
}

console.log(pigIt('Pig latin is cool')); // igPay atinlay siay oolcay
console.log(pigIt('Hello world !'));     // elloHay orldway !
console.log(pigIt('Pig latin is cool')) //,'igPay atinlay siay oolcay'
console.log(pigIt('This is my string')) //,'hisTay siay ymay tringsay')