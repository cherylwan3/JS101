/**
 * ex 1
 * input: ['flower', 'flow', 'flight']
 * output: 'fl'
 * 
 * ex2:
 * input: ['dog', 'racecar', 'car']
 * output: ''
 * explanation: there is no common prefix among inputs strings
 * 
 * note:
 * all given inputs in lowercase letters a-z
 * 
 * 
 * func(array of strs)
 * return: longest, common prefix str
 * A-------------------
 * get shortest str
 * 
 * 
 * A-----------
 * declare prefix to ''
  * iterate over shortest str from idx 0 to < length
  *    - get the char at each index
  * // f, l, o, w
  *    - IF char matches char at current idx in every str in the array
  *       -> append it to @prefix str
  *    - ELSE break
 * 
 * return the prefix
 */

function commonPrefix(arrStr) {
  let arrCopy = arrStr.slice().sort((str1, str2) => str1.length - str2.length);
  let shortestStr = arrCopy[0];

  let prefix = '';
  for (let idx = 0; idx < shortestStr.length; idx += 1) {
    let char = shortestStr[idx];

    if (arrCopy.every(str => str[idx] === char)) {
      prefix += char;
    } else {
      break;
    }
  }

  return prefix;
}

console.log(commonPrefix(['flower', 'flow', 'flight']));
console.log(commonPrefix(['dog', 'racecar', 'car']));