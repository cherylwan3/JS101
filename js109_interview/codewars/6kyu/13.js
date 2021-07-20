// Longest alphabetical substring
// https://www.codewars.com/kata/5a7f58c00025e917f30000f2

/**
P--
input: func(str)
output: subStr 
- output subStr = longest alphabetical substring in str
- input will be lowercase char, >= 1 char
- if multile solutionss, return first one

A--
- make an array of substrings of the string
  ['ab, 'af', 'aef']
- compare the length of each substr, get the longest substr
- return the longest substr

--------------------------
make an array of the subStrs
- turn str to array -> strArr
- iterate over strArr using map, add a space between subStrs
  - if char > nextChar
    - return: char + space
- join strArr by '', then split it by ' '

--------------------------------
compare the length of each substr & return the longest substr
- sort strArr by its substring's length in descending order
- return first element

*/


function longest(str) {
  let strArr = [...str]
    .map((char, idx) => {
    let nextChar = str[idx + 1];
    if (char > nextChar) {
      return char + ' ';
    }
    
    return char;
  })
    .join('')
    .split(' ');
  

  strArr.sort((a,b) => b.length - a.length);
  

  return strArr[0];
}

console.log(longest('nab') === 'ab');
console.log(longest('z') === 'z');
console.log(longest('asd') === 'as');
console.log(longest('abcdeapbcdef') === 'abcde');
console.log(longest('asdfaaaabbbbcttavvfffffdf') === 'aaaabbbbctt');
console.log(longest('asdfbyfgiklag') === 'fgikl');
console.log(longest('zyba') === 'z');


/* // getting all subslices of an array
let arr = console.log(longest(1,2,3];

let subArr = console.log(longest(];
for (let idx1 = 0; idx1 < arr.length; idx1 += 1) {
  for (let idx2 = idx1 + 1; idx2 <= arr.length; idx2 += 1) {
    subArr.push(arr.slice(idx1) === idx2));
  }
}

console.log(subArr.filter(arr => arr.length > 1)); */
