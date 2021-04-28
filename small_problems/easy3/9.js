/**
 * P----------------------------
 * -input: function (string)
 * -output: 
 * rules: string 
 * -
 * Given a string of words and an assortment of non-alphabetic characters
 * -function returns string of non-alphabetic characters replaced by spaces. 
 * -If one or more non-alphabetic characters occur in a row, 
 *  you should only have one space in the result 
 *- the result string should never have consecutive spaces

A------------------------------
- function cleanup(string) 
  - split the string into an array -> $stringArr
  - set $resultStr to ''
  - set $alphabet to an array with all the alphabet letters
  - for every element of stringArr, check to see if $alphabet contains that element
    - if it does, add the element to resultStr
    - if it doesn't
      - check if resultStr ends with an empty space, 
        - if it doesn't, add ' ' to resultStr
  - return result
  const LETTERS = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 
    'h', 'i', 'g', 'k', 'l', 'm', 'n', 
    'o', 'p', 'q', 'r', 's', 't', 'u', 
    'v', 'w', 'x', 'y', 'z'
  ]; 
*/

// my method
function cleanUp(string) {
  let result = '';

  for (let idx = 0; idx < string.length; idx += 1) {
    if(string[idx].toLowerCase() >= 'a' && string[idx].toLowerCase() <= 'z') {
      result += string[idx];
    } else {
      if (!result.endsWith(' ')) {
        result += ' ';
      }
    }
  }

  console.log(result);
  return result;
}


// books method
function cleanUp2(text) {
  let cleanText = '';

  for (let idx = 0; idx < text.length; idx += 1) {
    if (isLowerCaseLetter(text[idx]) || isUpperCaseLetter(text[idx])) {
      cleanText += text[idx];
    } else if (cleanText[cleanText.length - 1] !== ' ') {
      cleanText += ' ';
    }
  }

  return cleanText;
}

function isLowerCaseLetter(char) {
  return char >= 'a' && char <= 'z';
}

function isUpperCaseLetter(char) {
  return char >= 'A' && char <= 'Z';
}

// shorter book method
function cleanUp3(text) {
  return text.replace(/[^a-z]/gi, " ").replace(/\s+/gi, " ");
}


// ex
cleanUp("---what's my +*& line?");    // " what s my line "