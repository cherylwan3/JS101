// string to number 
// func (str) -> number

// "4321" ->  4321
// 1 + 20 + 300 + 4000
// length = 4, 
// A-----------
// - create the returnNum variable and set it to 0
// create obj named strToNum
// iterate from number 1 to string's length, 
//    - get char at string's length - current number
//    - get the number that matches in strToNum
//    - multiply the number by Math.pow(10, number - 1) 
//    - add the number to returnNum

let strToNum = {
  '0': 0,
  '1': 1,
  '2': 2,
  '3': 3,
  '4': 4,
  '5': 5,
  '6': 6,
  '7': 7,
  '8': 8,
  '9': 9
}
// recent sol
function stringToInteger(stringNum) {
  let resultNum = 0;

  for (let idx = 1; idx <= stringNum.length; idx += 1) {
    let numChar = stringNum[stringNum.length - idx];
    let num = strToNum[numChar];
    num = Math.pow(10, idx - 1) * num;
    resultNum += num; 
  }

  return resultNum;
}

// another sol
function stringToInteger(stringOfDigits) {
  let digitsStrArray = stringOfDigits.split('');
  let numArray = digitsStrArray.map(digitInString => {
    for (let num = 0; num < 10; num +=1 ) {
      if (digitInString == num) return num;
    }
  });

  let finalNum = 0;
  numArray.forEach(digit => finalNum = (10 * finalNum) + digit);
  return finalNum;
}

console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true