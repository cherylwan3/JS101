/**
P--
func(str1, str2)
return: boolean
- true: if portion of str1 rearranged matches str2
- false: otherwise
- only lower case letters used

A--
- turn str1 into an array -> str1Arr
- iterate over str2, for each letter
  - if str1Arr contains the letter, remove from str1Arr
    - if it doesn't return false
- return true

====================
remove letter from str1Arr
- get the index of the letter inside str1Arr
  =>  let idx = str1Arr.indexOf(letter) 
- use splice to remove the char at the index
  => str1Arr.splice(idx, 1) 
*/

function scramble(str1, str2) {
  let arr1 = [...str1];
  
  for(let idx = 0; idx < str2.length; idx += 1) {
    let letter = str2[idx];
   
    if (arr1.includes(letter)) {
      let removeIdx = arr1.indexOf(letter);
      arr1.splice(removeIdx, 1);
    } else {
      return false;
    }
  }
  
  return true;
}

// method 2

function scramble2(str1, str2) {
  let arr1 = [...str1];
  let matches = 0;
  
  for(let idx = 0; idx < str2.length; idx += 1) {
    let letter = str2[idx];
    let removeIdx = arr1.indexOf(letter);
    
    if (removeIdx >= 0) {
      arr1.splice(removeIdx, 1)[0];
      matches += 1;
    }
  }
  
  return matches === str2.length;
}


console.log(scramble('rkqodlw','world')); //true
console.log(scramble('cedewaraaossoqqyt','codewars')); //true
console.log(scramble('katas','steak')); //false
console.log(scramble('scriptjava','javascript')); //true
console.log(scramble('scriptingjava','javascript')); //true
console.log(scramble('scriptsjava','javascripts')); //true
console.log(scramble('jscripts','javascript')); //false
console.log(scramble('aabbcamaomsccdd','commas')); //true