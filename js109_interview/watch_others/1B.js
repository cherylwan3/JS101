/**
 * P-------------------------------------
 * input: func (str, str)
 * output: boolean
 * rules:
 * - returns true if a portion of str1 rearranged matches str2, otherwise false
 * D-------------------
 * 'hellokitty' 'kitty' 
 * 
 * 
 * A--------------------------------
 * - iterate over str2, index 0 to str2's length
 *    - if str1 includes the char at current index, 
 *      - find index of the char in str1, remove that char in str2
 *    - if doesn't include, 
 *      - return false
 * - return true
 * 
 * - 
*/


function scramble(str1, str2) {
  let str1Arr = str1.split('');

  for (let idx = 0; idx < str2.length; idx += 1) {
    let char = str2[idx];
    if (str1Arr.includes(char)) {
      let remove = str1Arr.indexOf(char);
      str1Arr.splice(remove, 1);
    } else {
      return false;
    }
  }
  return true;
}

console.log(scramble('javaass', 'jjss') === false) // true
console.log(scramble('rkqodlw', 'world') === true) // true
console.log(scramble('cedewaraaossoqqyt', 'codewars') === true) // true
console.log(scramble('katas', 'steak') === false) // true
console.log(scramble('scriptjava', 'javascript') === true) // true
console.log(scramble('scriptingjava', 'javascript') === true) // true