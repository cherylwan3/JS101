// break camelCase
// https://www.codewars.com/kata/5208f99aee097e6552000148
/*
 * P:
  input: func(str)
  output: str with space between the words when camel case occurs
  A--------
  declare a result str
  iterate over str
  when the char is an upper case letter, 
    add char with a space to result
  if char is lowercase letter
    add the current char to result

  return result
 * 
*/

function solution(str) {
  let result = '';

  for (let idx = 0; idx < str.length; idx += 1) {
    let char = str[idx];
    if (char === char.toUpperCase()) {
      result = result + ' ' + char;
    } else {
      result += char;
    }
  }

  return result;
}

console.log(solution('camelCasing')) //, 'camel Casing',
console.log(solution('camelCasingTest')) //, 'camel Casing Test'