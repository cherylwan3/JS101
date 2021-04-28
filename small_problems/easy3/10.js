/**
 * P-------------------------------
 * input: number
 * output: number
 * - function (year)
 * - returns century
 *  - return value: 
 *     - string that begins with century number
 *     - ends with 'st', 'nd', 'rd', or 'th'
 * - New centuries begin in years that end with 01
 * - years 1901 - 2000 comprise the 20th century
 * 
 * D/A -----------------------------
 * 1901/ 100 = 19.01 -> 20th century
 * 1801 / 100 = 18.01 -> 18th century
 * 101/ 100 = 0.01 -> 2nd century
 * A-------------------------------
 * - function century(year)
 * -  $century = divide divide $year by 100, ceiling of that number
 * - ELSE
 *    -- $century = divide divide $year by 100, floor the number, add 1
 * 
 * - if string of $century ends with '1'
 *  - log $century + 'st'
 * - if string of $century ends with '2'
 *  - log $century + 'nd'
 * -if string of $century ends with '3'
 *    - log $century + 'rd'
 * -ELSE 
 *    -log $century + 'th'
 * 
 */

function century(year) {
  let century = Math.ceil(year / 100);
  century = String(century);

  let lastDigit = century[century.length - 1];
  let secondToLast = century[century.length - 2];

  if (secondToLast === '1') {
    console.log(century + 'th');
  } else if (lastDigit === '1') {
    console.log(century + 'st');
  } else if (lastDigit === '2') {
    console.log(century + 'nd');
  } else if (lastDigit === '3') {
    console.log(century + 'rd');
  } else {
    console.log(century + 'th');
  }
}


//ex
century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);      // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th" 

