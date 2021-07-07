/**
 * E------
 * ex: "4321"
 * let count = 0;
 *  str[3] = 1 * 10 ** count
 * str[2] = 2 * 10 ** count + previous number 
 * A--------
 * create a strDigit Obj { '0': 0}
 * let count = 0;
 * let num;
 * iterate over strNum from idx of str.length - 1 to 0
 *  - let digit = str[idx]
 *  - num = get strDigit['digit'] * (10 ** count)
 *  - count += 1;
 * 
 * return num;
*/

let strToNum = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
};

function stringToInteger(strNum) {
  let powerCount = 0;
  let num = 0;

  for (let idx = strNum.length - 1; idx >= 0; idx -= 1) {
    let digit = strNum[idx];
    num += strToNum[digit] * (10 ** powerCount);
    powerCount += 1;
  }

  return num;
}

console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true