/**
 * replace all non-alphabet w/ space
 * if 2+ alphabetic in row, only one space, no consecutive space
 * E--
 * 'ab!#cd!'
 * 012345
 * 
 * result: 'ab ' 
 * 
 * 
 * 
 * A---
 * - declare @result
 * - iterate over str
 *  - check if current char is alphabet 
 *     - append char to result
 *  - else if last idx char is alphabet , 
 *    - append ' ' to result
 * 
 * method 2:
 * - declare @result
 * - declare: @space = false;
 * - iterate over str
 *  - check if current char is alphabet 
 *    - currenChar lowercased >= 'a' && <= 'z'
 *     - append char to result
 *     - if space is true, assign space to false
 *  - else if space is false,
 *    - append ' ' to result
 *    -  reassign @space to true 
*/


function cleanUp(string) {
  let result = '';
  let space = false;

  for (let idx = 0; idx < string.length; idx += 1) {
    let char = string[idx].toLowerCase();

    if (char >= 'a' && char <= 'z') {
      result += char;
      if (space === true) space = false;
    } else if (space === false) {
      result += ' ';
      space = true;
    }
  } 

  return result;
}


// my method
function cleanUp1(string) {
  let result = '';

  for (let idx = 0; idx < string.length; idx += 1) {
    if (string[idx].toLowerCase() >= 'a' && string[idx].toLowerCase() <= 'z') {
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

console.log(cleanUp1("---what's my +*& line?"));    // " what s my line "