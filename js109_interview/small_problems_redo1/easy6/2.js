/**
 * split str to array
 * iterate over array using map
 * if char is an alphabetical && not in ['a','e','i','o','u'], 
 *   return char doubled
 * else
 *  return char
 * join array
*/


const VOWELS = ['a','e','i','o','u'];

function doubleConsonants(str) {
  let resultStr = [...str]
    .map(char => {
      return isConsanant(char) ? char.repeat(2) : char;
    })
    .join('');

  console.log(resultStr);
  return resultStr;
}

function isConsanant(char){
  let testChar = char.toLowerCase();
  return (testChar >= 'a' && testChar <= 'z' && !VOWELS.includes(char));
}

doubleConsonants('String');          // "SSttrrinngg"
doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
doubleConsonants('July 4th');        // "JJullyy 4tthh"
doubleConsonants('');                // ""