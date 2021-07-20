/**
input: func (str1, str2 - optional)
- str1 = lower cased str (first word may be capitalized)
- str2 = str - minor word, list of exceptions
  - ignore str2 case
output: str
- title case: 
  - each word is either 
    1) capitalized
    2) if exception word, unless first word,all lower case
    
A--
func (str1, minorStr - default is '')
- str1 -> words -> convert to lower case
- str2 -> minorStr


- iterate through words array using map, for each word ->
  - if minorStr includes word && not first word,
    - return word 
  - else,
    - return word capitalized
- return the words array joined -> string

*/

function titleCase(str1, minorStr = '') {
  if (str1.length <= 0) return '';
  
  let wordsArr = str1.toLowerCase().split(' ');
  let result = wordsArr
    .map((word, idx) => {
      if (minorStr.includes(word) && idx !== 0) {
        return word;
      }

     return word[0].toUpperCase() + word.slice(1);
    })
    .join(' ');
  
  return result;
}




console.log(titleCase('')); //, ''
console.log(titleCase('a clash of KINGS', 'a an the of')); // should return: 'A Clash of Kings'

console.log(titleCase('THE WIND IN THE WILLOWS', 'The In')); // should return: 'The Wind in the Willows'
console.log(titleCase('the quick brown fox')); // should return: 'The Quick Brown Fox'