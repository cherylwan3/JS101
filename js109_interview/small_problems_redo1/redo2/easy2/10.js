/**
 * func (strNum)
 * returns: + or - num
 * 
 * if strNum starts with '-' then pass strNum(1,endIdx) to stringToInteger()
 * => num 
 * multiply num by -1 => return -num
 * 
 * else if starts with '+' 
 * pass strNum(1,endIdx) to stringToInteger() =>  return num
 * 
 * else {
 * pass strNum(0, endIdx) => return num
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

function stringToSignedInteger(strNum) {
  if (strNum[0] === '-') {
    return -stringToInteger(strNum.slice(1));
  } else if (strNum[0] === '+') {
    return stringToInteger(strNum.slice(1));
  } else {
    return stringToInteger(strNum.slice());
  }
}



console.log(stringToSignedInteger("4321") === 4321); // logs true
//console.log(stringToSignedInteger("4321"));
console.log(stringToSignedInteger("-570") === -570); // logs true
//console.log(stringToSignedInteger("-570"));
console.log(stringToSignedInteger("+100") === 100); // logs true
//console.log(stringToSignedInteger("+100"));