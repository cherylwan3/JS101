// Decipher this!
// https://www.codewars.com/kata/581e014b55f2c52bb00000f8

/**
2
P---
3
input: func(str)
4
output: str with each word changed ->
5
  - first letter: char code converted to letter
6
  - switch second and last letter
7
  
8
D---
9
array of words
10
stringWord
11
​
12
A--
13
- split str into arrWords by ' ' 
14
- iterate over arrWords using map: for each word ->
15
  - use parseInt to get charCode, get the charCode letter
16
    - use str.replace the charCode with with letter
17
 - turn the newStr into an array 
18
 - switch the elem at idx 1 and idx[array.length - 1]
19
 - join array together
20
 - return the str
21
- join arrWords together, return this string
22
*/

function decipherThis(str) {
  let arrWords = str.split(' ');
  let resultStr = arrWords
    .map(word => {
      let charCode = parseInt(word);
      let charCodeLetter = String.fromCharCode(charCode);
      let newWord = word.replace(charCode, charCodeLetter);

      let wordArr = [...newWord];
      let lastIdx = wordArr.length - 1;
      [wordArr[1], wordArr[lastIdx]] = [wordArr[lastIdx], wordArr[1]];

      return wordArr.join('');
    })
    .join(' ');

  return resultStr;
}

console.log(decipherThis('72olle 103doo 100ya'));

decipherThis('72olle 103doo 100ya'); // 'Hello good day'
console.log(decipherThis('82yade 115te 103o')); // 'Ready set go'
console.log(decipherThis('72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o')); 

// 'Have a go at this and see how you do'); 
