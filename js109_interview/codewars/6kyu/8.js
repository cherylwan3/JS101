/* eslint-disable max-len */
// https://www.codewars.com/kata/58f5c63f1e26ecda7e000029
// Mexican Wave

/**
 * input: func(str)
 * output: array - of strs
 * wave: - every index capitalized for each string
 * - input always lower case or ''
 * - if char is a whitespace, pass over it
 * A--
 * - create arr
 * - iterate over str from idx 0 to the end
 *  - if char is whitespace, continue the loop
 *    - str.slice(0,idx) + str[idx].toUpperCase() + str.slice(idx + 1)
 * - return arr
 * 
*/

function wave(str) {
  let arr = [];

  for (let idx = 0; idx < str.length; idx += 1) {
    if (str[idx] === ' ') continue;

    let strArr = [...str];
    strArr[idx] = strArr[idx].toUpperCase();
    arr.push(strArr.join(''));
  }

  return arr;
}

console.log(wave("hello")) //node  => ["Hello", "hEllo", "heLlo", "helLo", "hellO"];