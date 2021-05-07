/**
 * P-------------------
 * input: func (str)
 * output: str
 * rules:
 * -  returns that string
 * - with first character of every word capitalized 
 * - and all subsequent characters in lowercase.
 * -
 * D/A----------------------------
 * - split the string by (' ') -> @wordArr
 * - iterate over @wordArr
 * - return with first character of every word capitalized, 
 *    all other characters in lowercase
 * - join @wordArr and return the str
*/

// ex
console.log(wordCap('four score and seven'));       // "Four Score And Seven"
console.log(wordCap('the javaScript language'));    // "The Javascript Language"
console.log(wordCap('this is a "quoted" word'));    // 'This Is A "quoted" Word'

function wordCap(str) {
  return str
    .split(' ')
    .map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}