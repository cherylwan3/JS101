/**
 * P---------------------
 * input: function (string)
 * output: string
 * rules:
 * - function (sentence string)
 * - returns string with every "number word" converted to 
 *    digit 
 * D------------------
 * - 
 * - @numberWord = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 
 *   'eight', 'nine']
 * A-----------------
 * - declare const @numberWord , set it to array of numberWords
 * - string split into array -> @sentenceArr
 * - start loop: iterate over @sentenceArr, 
 *  - set @idx to @numberWord's index of @word (elem)
 *  - if  @idx is >= 0,
 *    return @idx to @resultArr
 *  - return @word  to @resultArr
 *  - end the loop
 * - join @resultArr by ' ' and return the string
*/

// short method
// takes advantage of the fact that the digit is the index of NUMBER_WORD
function wordToDigit(sentence) {
  const NUM_WORDS = [
    'zero', 'one', 'two', 'three', 'four', 
    'five',  'six', 'seven', 'eight', 'nine'
  ]; 
  NUM_WORDS.forEach((numWord, digit) => {
    let regex = new RegExp(numWord, 'gi');
    sentence = sentence.replace(regex, digit);
  })
  return sentence;
}


// E: test cases
console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));   
// "Please call me at 5 5 5 1 2 3 4. Thanks."


// longer method
function wordToDigit1(sentence) {
  return sentence
    .split(' ')
    .map(word => {
      let digit;
      if (word.endsWith('.')) {
        digit = getDigit(word.slice(0, -1));
        return digit >= 0 ? String(digit) + '.' : word; 
      } else {
        digit = getDigit(word);
        return digit >= 0 ? digit : word;
      }
    })
    .join(' ');
}


function getDigit(word) {
  const NUMBER_WORD = [
    'zero', 'one', 'two', 'three', 'four', 
    'five',  'six', 'seven', 'eight', 'nine'
  ];
  word = word.toLowerCase();
  return NUMBER_WORD.indexOf(word);
}