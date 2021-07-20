// count letters in str
// https://www.codewars.com/kata/5808ff71c7cfa1c6aa00006d/solutions/javascript
/**
func(str)
output: return obj 
- obj's keys: letter 
- obj's values: letter count
- only count lower case letters

A--
- create empty obj 
- iterate through each letter in str
  - if letter is a lower case char
    - if obj.letter doesn't exist, set obj.letter to 0
    - if obj.letter exists, increment obj.letter by 1
- return obj
*/

function letterCount(str) {
  let obj = {};
  for (let idx = 0; idx < str.length; idx++) {
    let letter = str[idx];
    
    if (letter === letter.toLowerCase()) {
      obj[letter] = obj[letter] || 0;
      obj[letter] += 1;
    }
  }
  
  return obj;
}


console.log(letterCount('arithmetics')); //=> {"a": 1, "c": 1, "e": 1, "h": 1, "i": 2, "m": 1, "r": 1, "s": 1, "t": 2}