/**
 * P---------------
 * input: array
 * output: array
 * - given array of strings, lower case
 * - return array of all characters that show up in all strings
 *    - including duplicates
*/
// obtain the string at index 0 of arrOfStrings -> firstString
// iterate over every letter of firstString
//   - test every string in arrOfStrings to see if it includes firstString letter
//   - if yes, append the letter to an array
//       - iterate over every string in arrOfStrings,
//          - find index of letter and remove letter 
// return the array

console.log(commonChars(['ab', 'bc'])) // ['b']
console.log(commonChars(['bella', 'label', 'roller'])) // ['e', 'l', 'l']
console.log(commonChars(['cool', 'lock', 'cook'])) // ['c', 'o']
console.log(commonChars(['hello', 'goodbye', 'booya', 'random'])) // ['o']
console.log(commonChars(['aba', 'cdc', 'efef', 'grg', 'yz'])) // []

function commonChars(arrOfStrings) {
  let arrOfStrArr = arrOfStrings.map(str => str.split(''));
  let firstStr = arrOfStrings[0];
  
  let resultArr = [];
  for (let idx = 0; idx < firstStr.length; idx += 1) {
    let letter = firstStr[idx];

    if (arrOfStrArr.every(strArr => strArr.includes(letter))) {
      resultArr.push(letter);

      for (let arrIdx = 0; arrIdx < arrOfStrArr.length; arrIdx += 1) {
        let strArr = arrOfStrArr[arrIdx];
        let removeIdx = strArr.indexOf(letter);
        strArr.splice(removeIdx, 1);
      }
    }
  }

  return resultArr;
}