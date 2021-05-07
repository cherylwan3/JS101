/**
 * P-------------------
 * input: func(str)
 * output: obj
 * rules:
 * - returns an object containing three properties
 * 1: represents number of characters in the string that are lowercase letter
 * 2: represents number of characters that are uppercase letters
 * 3: number of characters that are neither
 * D/A----------------------------
 * - convert str to an array -> @strArr
 * - set obj;
 * - set @obj.lowercase to 0;
 * - set obj.uppercase to 0
 * - set neither to 0;
 * - iterate over @strArr
 *  - if char is lower case letter, 
 *    - obj.lowercase += 1
 * - if char is upper case letter, 
 *  - obj.uppercase += 1
 * - else,
 * - obj.neither += 1
*/

// ex
letterCaseCount('abCdef 123');  // { lowercase: 5, uppercase: 1, neither: 4 }
letterCaseCount('AbCd +Ef');    // { lowercase: 3, uppercase: 3, neither: 2 }
letterCaseCount('123');         // { lowercase: 0, uppercase: 0, neither: 3 }
letterCaseCount('');            // { lowercase: 0, uppercase: 0, neither: 0 }

function letterCaseCount1(str) {
  let obj = { lowercase: 0, uppercase: 0, neither: 0};

  [...str].forEach(char => {
    if (char >= 'a' && char <= 'z') {
      obj.lowercase += 1;
    } else if (char >= 'A' && char <= 'Z') {
      obj.uppercase += 1;
    } else {
      obj.neither += 1;
    }
  });
  console.log(obj);
  return obj;
}

// book solution
function letterCaseCount(string) {
  let lowercaseChars = string.match(/[a-z]/g) || [];
  let uppercaseChars = string.match(/[A-Z]/g) || [];
  let neitherChars = string.match(/[^a-z]/gi) || [];

  return {
    lowercase: lowercaseChars.length,
    uppercase: uppercaseChars.length,
    neither: neitherChars.length
  };
}