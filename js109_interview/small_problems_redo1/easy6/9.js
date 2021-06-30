/**
 * split string into words
 * reverse array of words
 * 
 */

reverseSentence('');                       // ""
reverseSentence('Hello World');            // "World Hello"
reverseSentence('Reverse these words');    // "words these Reverse"

function reverseSentence(str) {
  str = str.split(' ').reverse().join(' ');

  console.log(str);
  return str;
}