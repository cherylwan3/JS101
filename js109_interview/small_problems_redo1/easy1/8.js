/**
 * P-----------------------
 * input: year
 * output: true if leap year
 * rules:
 * - leap year: evenly divisble by 4 && not  by 100
 * - leap year: if year divisible by 100 && year is divisible by 400
 * A--------------------
 * - if year evenly divisble by 4 
 *  - if year is evenly divisble by 100, return false
 *  - return true 
 * - if year evenly divisible by 100 
 *   - if year is evenly divisible by 400, return true
 *  - return false
 * - else
 *   - return false
 * 
*/

/* function isLeapYear(year) {
  if (year % 100 === 0) {
    if (year % 400 === 0) return true;
    return false;
  } else if (year % 4 === 0) {
    if (year % 100 === 0) return false;
    return true;
  } else {
    return false;
  }
} */

function isLeapYear(year) {
  if (year % 400 === 0) {
    return true;
  } else if (year % 100 === 0) {
    return false;
  } else if (year % 4 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isLeapYear(2016));      // true
console.log(isLeapYear(2015));      // false
console.log(isLeapYear(2100));      // false
console.log(isLeapYear(2400));      // true
console.log(isLeapYear(240000));    // true
console.log(isLeapYear(240001));    // false
console.log(isLeapYear(2000));      // true
console.log(isLeapYear(1900));      // false
console.log(isLeapYear(1752));      // true
console.log(isLeapYear(1700));      // false
console.log(isLeapYear(1));         // false
console.log(isLeapYear(100));       // false
console.log(isLeapYear(400));       // true