/**
 * func (str1, str2)
 * return: true if substr found in both strings
 *         - false otherwise
 * - substrings > 1 letter
 * 
 *  Something
 * Fun
 * 012
 * 
 * starIdx 0 to < str.length - 1
 *  endIdx = startIdx + 1 to <= str.length
 * 
 * 
 * Fun.slice(0, 1) (0, 2)
 * Fun.slice(1, 2)
 * 
 * Fu Fun un So Som Some Somet o
 *
 * A-----
 * 1) find shorterStr and longerStr
 * 2) get shorterStr's length
 * 3) iterate over shorterStr to get all possible substrs
 * 4) iterate over longStr to get all substrs up to shorterStr's length
 * 
 * let str1 array = shorter []
 * let str2 array = longerStr []
 *
 * to get all substrs from shorterStr(str1)
 * - loop from starIdx 0 to < shorterStr.length - 1
 *    loop from endIdx = startIdx + 1 to <= shorterStr.length
 *        get the substring from startIdx to endIdx (plus 1 for slice)
 *        push it into str1Arr
 * - to get all substrs from longerStr(str2)
 *    loop from starIdx 0 to < longerStr.length
 *        loop from endIdx = startIdx + 1 to <= shorter.length
 *            push it into str2Arr
 * 
 *  
 * iterate over str1Arr
 *    - if str2Arr contains current strElement 
 *      return true;
 * 
 * return false;
*/

function substrArr(str) {
  let result = [];
  for (let startIdx = 0; startIdx < str.length; startIdx += 1) {
    for (let endIdx = startIdx + 2; endIdx <= str.length; endIdx += 1) {
      result.push(str.slice(startIdx, endIdx).toLowerCase());
    }
  }
  //result = result.filter(substr => substr.length >= 2);

  return result;
}

function substringTest(str1, str2) {
  let str1Arr = substrArr(str1);
  let str2Arr = substrArr(str2);

  let result = str1Arr.some(substr => str2Arr.includes(substr));
  return result;
}

console.log(substringTest('Something', 'Fun') === false);
console.log(substringTest('Something', 'Home') === true);
console.log(substringTest('Something', 'Fun') === false);
console.log(substringTest('Something', '') === false);
console.log(substringTest('','Something') === false);
console.log(substringTest('BANANA', 'banana') === true);
console.log(substringTest('test', 'lllt') === false);
console.log(substringTest('', '') === false);
console.log(substringTest('1234567', '541265') === true);
console.log(substringTest('supercalifragilstic', 'SounOFITISAtrociou') === true); 