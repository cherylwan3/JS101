/**
 * P---------------------
 * input: func (string)
 * output: object
 * rules:
 * - object contains 3 properties
 * 1. the percentage of characters in the string that are lowercase letters
  2. the percentage of characters that are uppercase letters
  3. the percentage of characters that are neither
  - string will always have at least one character 
 * D------------------
  - split string into an array
 * - iterate over @strArr
  -  obj = { lowercase: 0, uppercase: 0, neither: 0 }
 * A-----------------
  - create an object @obj
  - 
 * - iterate over @strArr
 *    - if @char is a lowercase letter, add 1 to obj.lowercase
 *     - else if @char is an uppercase letter, add 1 to obj.uppercase
 *     - else, add 1 to obj[neither]
 * - iterate over @obj's values,
 *    - set @sum to adding up all the values using reduce
 * - iterate over obj's keys 
 *  - set obj.key to (obj.key /sum) * 100 .toFixed(2)
 * 
 * return obj
*/

// E: test cases
letterPercentages('abCdef 123');
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

letterPercentages('AbCd +Ef');
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

letterPercentages('123');
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }


function letterPercentages(str) {
  let obj = { lowercase: 0, uppercase: 0, neither: 0 };
  
  [...str].forEach(char => {
    if (/[a-z]/.test(char)) {
      obj.lowercase += 1;
    } else if (/[A-Z]/.test(char)) {
      obj.uppercase += 1;
    } else {
      obj.neither += 1;
    }
  })
  
  let sum = str.length;
  for (let key in obj) {
    obj[key] = ((obj[key] / sum) * 100).toFixed(2);
  }

  console.log(obj);
  return obj;
}

// books solution
function letterPercentages1(string) {
  let count = string.length;

  function percentage(regex) {
    let matchingChars = string.match(regex) || [];
    return ((matchingChars.length / count) * 100).toFixed(2);
  }

  return {
    lowercase: percentage(/[a-z]/g),
    uppercase: percentage(/[A-Z]/g),
    neither:   percentage(/[^a-z]/gi),
  };
}

