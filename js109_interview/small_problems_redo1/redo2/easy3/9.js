/**
 * func (str)
 * returns: str with nonLetters replaced by ' ' 
 * 
 * A:
 * declare resultStr
 * declare previousLetter = true;
 * iterate over every char in str
 * if char is a letter, append it to resultStr
 *    previousLetter = true;
 * else if char is not a letter
 *    if previousLetter === true, then append ' ' to resultStr
 *    previousLetter = false;
 * 
*/

console.log(cleanUp("---what's my +*& line?"));    // " what s my line "

function cleanUp(str) {
  let resultStr = '';
  let previousLetter = true;

  [...str].forEach(char => {
    if (isLetter(char)) {
      resultStr += char;
      previousLetter = true;
    } else {
      if (previousLetter === true) resultStr += ' ';
      previousLetter = false;
    }
  });

  return resultStr;
}

function isLetter(char) {
  let testChar = char.toLowerCase();
  return testChar >= 'a' && testChar <= 'z';
}