/**
 * P: --------------------------
 * Input: integer greater than 0
 * Output: boolean
 * Rules:
 * - returns true if its a leap year, returns false if not leap year
 * - leap year: 
 *    - evenly divisible by 4, 
 *    - not if year is also divisible by 100, unless also evenly divisible by 400
 * E------------------------------- 
 * isLeapYear(2016);      // true
  isLeapYear(2015);      // false
  isLeapYear(2100);      // false
  isLeapYear(2400);      // true
  isLeapYear(240000);    // true
  isLeapYear(240001);    // false
  isLeapYear(2000);      // true
  isLeapYear(1900);      // false
  isLeapYear(1752);      // true
  isLeapYear(1700);      // false
  isLeapYear(1);         // false
  isLeapYear(100);       // false
  isLeapYear(400);       // true
 * 
 * A ----------------------------------
 * - write a function named 'isLeapYear' with one parameter named 'year'
 *    - IF 'year' is evenly divisible by 100 and evenly divisible by 400, 
 *       - return 'true'
 *    - ELSEIF 'year' is evenly disible by 4 && not evenly divisible by 100
 *        - return 'true' 
 *    - ELSE
 *        - return 'false'
 * 
 */

 function isLeapYear(year) {
  if (year % 400 === 0) { 
    console.log(true);
    return true;
  } else if (year % 100 === 0) {
    console.log(false);
    return false;
  } else {
    console.log(year % 4 === 0);
    return year % 4 === 0;
  }
}

  // shorter sol
function isLeapYear1(year) {
  return (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);
}


console.log(isLeapYear(2016));      // true
isLeapYear(2015);      // false
isLeapYear(2100);      // false
isLeapYear(2400);      // true
isLeapYear(240000);    // true
isLeapYear(240001);    // false
isLeapYear(2000);      // true
isLeapYear(1900);      // false
isLeapYear(1752);      // true
isLeapYear(1700);      // false
isLeapYear(1);         // false
isLeapYear(100);       // false
isLeapYear(400);       // true