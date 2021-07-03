/* eslint-disable max-lines-per-function */
/**
 * featureNum = odd num, mulple of 7,digits occuring once
 * largest featureNum: 9876543201
 * input: func (num)
 * returns: next featured num > num OR error message if no next featured num
 * E------
 * 
 * 12 -> 21
 21 -> 35
 * A----------
 * - while true
 *  - add 7 to num
 *  - if (num / 2) === 1 && digits occur once 
 *    - break the loop
 * - return num
 *  
 * Digits occur once:
 * - convert num to a stringArr, iterate over it
 * - sort the array from least to greatest
 * - check to see if digit === digit[idx + 1]
 *    return false;
 */

function featured(num) {
  const MAX_FEATURED = 9876543201;

  while (true) {
    num = (num % 7 === 0) ? num + 7 : num + 1;
    if (num > MAX_FEATURED) break;

    if (num % 7 === 0 && num % 2 === 1 && differentDigits(num)) {
      console.log(num);
      return num;
    }
  }

  console.log('There is no next featured number.');
  return 'There is no next featured number.';
}

function differentDigits(num) {
  let numArr = [...String(num)].sort((a,b) => +a - +b);
  let result = numArr.every((digit, idx) => digit !== numArr[idx + 1]);
  return result;
}



featured(12);           // 21
featured(20);           // 21
featured(21);           // 35
featured(997);          // 1029
featured(1029);         // 1043
featured(999999);       // 1023547
featured(999999987);    // 1023456987
featured(9876543186);   // 9876543201
featured(9876543200);   // 9876543201
featured(9876543201);   // "There is no possible number that fulfills those requirements."