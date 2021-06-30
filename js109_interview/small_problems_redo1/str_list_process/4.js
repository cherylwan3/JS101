/**
 * split string into array of words
 * iterate over array of words, map
 *  - return word[0] capitalized + rest of words lowercase
 * join array together into string
 * return string
 */
wordCap('four score and seven');       // "Four Score And Seven"
wordCap('the javaScript language');    // "The Javascript Language"
wordCap('this is a "quoted" word');    // 'This Is A "quoted" Word'

function wordCap(str) {
  let result = str
    .split(' ')
    .map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');

  console.log(result);
  return result;
}