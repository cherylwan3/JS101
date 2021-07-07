/* eslint-disable max-lines-per-function */
/**
 * func (year)
 * returns: century
 *
 * 01 - 000 is a century
 * 0 -> 100 -> 1st century
 * 1901 - 2000 -> 20th century
 * 2001 - 2100 -> 21st century
 * 11201 -> 113th
 *

 * D:
 * 1) century number
 * 2) century suffix
 *
 *  1st 2nd 3rd 4th 5th ...10th
 * 11th 12th 13th...20th
 *  21st 22nd 23rd 24th  .. 30th
 * 31st 32nd 33rd 34th..4th
 * 101st 102nd 103rd 10th 110th
 * 111th 112th 113th
 *
 *
 * A1)
 *  remainder = year % 100
 * century = +String(year).slice(0, -2);
 * if remainder is between 1 and 99, then
 *  century = century + 1;
 *
 *
 * A2)
 let last2Digits =  +String(century(-2, end))
 *  if === 1
 *  suffix = 'st'
 * else if === 2
 *  suffix = 'nd'
 * else if === 3
 *  suffix ='rd'
 * else
 *  suffix = 'th'
 *
*/
function century(year) {
  let century = +String(year).slice(0, -2);
  let remainder = year % 100;
  if (remainder !== 0) century += 1;

  let last2Digits = century % 100;
  let lastDigit = century % 10;

  if ([11, 12, 13].includes(last2Digits)) {
    century += 'th';
  } else if (lastDigit === 1) {
    century += 'st';
  } else if (lastDigit === 2) {
    century += 'nd';
  } else if (lastDigit === 3) {
    century += 'rd';
  } else {
    century += 'th';
  }

  console.log(century);
  return century;
}

century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"