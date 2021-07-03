/* eslint-disable max-len */
/**
 * func(str)
 * out: obj {lowercase: percentStr, uppercase: percentStr, neither: percentStr)}
 * A--
 * - create obj {lowercase: percentStr, uppercase: percentStr, neither: percentStr)}
 * 
 * - iterate over the string 
 *   -
 *   - if char is a lowercase letter, obj.lowercase += 1
 *    else if char is upper case, obj.uppercase += 1
 *    else obj.neither += 1
 * - iterate over obj and divide the obj value by the length of string
 *    - make it a string with 2 places after decimal 
 * - return the obj
*/

letterPercentages('abCdef 123');
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

letterPercentages('AbCd +Ef');
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

letterPercentages('123');
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }


function letterPercentages(str) {
  let obj = {lowercase: 0, uppercase: 0, neither: 0};
  [...str].forEach(char => {
    if (char >= 'a' && char <= 'z') {
      obj.lowercase += 1;
    } else if (char >= 'A' && char <= 'Z') {
      obj.uppercase += 1;
    } else {
      obj.neither += 1;
    }
  });

  for (let prop in obj) {
    obj[prop] = ((obj[prop] / str.length) * 100).toFixed(2);
  }
  console.log(obj);
}