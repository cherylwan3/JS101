/* eslint-disable max-lines-per-function */
/**
 * feaNum = 
 * 1) odd
 * 2) multiple of 7
 * 3) all digits occur once each
 * 
 * func input: integer
 * returns: next feaNum > integer
 * - issues error message if no next featured number
 * - largest possible feaNum = 9876543201;
 * 
 * E---------
 * 49 - feaNum
 * 98 !feaNum
 * 
 * Ex] num = 21;
 * 
 * A---------------
 * IF not a multiple of 7, 
 *   keep adding 1 until its a multiple of 7
 * 
 * IF it is a mutiple of 7
 *   check if it's odd AND all digits occur once each && multiple of 7
 *      IF true return the number 
 *      ELSE, add 7
*/

function featured(num) {
  const MAX_FEATURED = 9876543201;

  while (true) {
    num = multipleOf7(num) ? num + 7 : num + 1;

    if (num > MAX_FEATURED) break;
    if (passConditions(num)) {
      console.log(num);
      return num;
    }
  }

  console.log("There is no possible number that fulfills those requirements.");
  return undefined;
}

function passConditions(num) {
  return multipleOf7(num) && (num % 2 === 1) && digitOnce(num);
}

function multipleOf7(num) {
  return num % 7 === 0;
}

function digitOnce(num) {
  let digitArr = [];

  let numArr = [...String(num)];
  for (let idx = 0; idx < numArr.length; idx += 1) {
    if (digitArr.includes(numArr[idx])) return false;
    digitArr.push(numArr[idx]);
  }

  return true;
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

