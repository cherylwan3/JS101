/**
 * func input: string 
 * func out: stirng
 * - 
 * E-------
 * 'aabb' -> 'ab'
 * A-------
 * func(str)
 * declare @resultStr 
 * iterate over @str from idx 0 to str's length
 * - if resultStr[resultStr.length - 1] !== str[idx]
 *    - append the current character in @str to @resultStr
 * return @resultSTr
*/

crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""

function crunch(str) {
  let resultStr = '';

  for (let idx = 0; idx < str.length; idx += 1) {
    if (resultStr[resultStr.length - 1] !== str[idx]) {
      resultStr += str[idx];
    }
  }

  console.log(resultStr);
  return resultStr;
}

// books method 
function crunch(text) {
  let crunchText = '';

  for (let index = 0; index <= text.length - 1; index += 1) {
    if (text[index] !== text[index + 1]) {
      crunchText += text[index];
    }
  }

  return crunchText;
}