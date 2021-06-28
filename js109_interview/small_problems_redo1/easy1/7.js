// rules:
// input: function (str1, str2)
// output: string -> 'shorterLongerShorter'

//A:
// determine which length is longer 
//  - if str1's length > str2's length, 
//  - if str2's length > str1's length 

console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
console.log(shortLongShort('', 'xyz'));         // "xyz"

function shortLongShort(str1, str2) {
  if (str1.length < str2.length) {
    return `${str1}${str2}${str1}`;
  } else {
    return `${str2}${str1}${str2}`;
  }
}