/**
 * century based on 100 years
 * E--------
 * 1) which century
 * 20th century -> 1901 - 2000
 * 19th century -> 1801 - 1900
 * 1st century -> 1 - 100
 * 
 * E: 2000,
 * 2,000 % 100 -> 0
 * 2001 % 100 -> 1
 * 
 * 2) ending of century
 * 1st, 2nd, 3rd, 4th,... 10th
 * 11th, 12th, 13th, 14th ... 20th
 * 21st, 22nd, 23rd, 24th, 25th..30th
 * 31st, 32nd, 33rd, 34th...40th
 * 113th
 * 121st
 * 
 * 
 * A-------
 * 1) which centurys
 * -  convert year to string -> strYear
 *  - get the century: 
 *  - get the string up to last 2 char -> @centuryStr
 *    - convert @century to number and reassign to @century
 *  - year % 100 is > 0 ,
 *        - @century = @century + 1
 * 2) ending of century
 * - if last2Digits starts with '1' && >= 11
 *    - ending -> 'th'
 * - ELSE IF last2Digits ends with '1' 
 *    - ending -> 'st'
 * - ELSEIF ends with '2'
 *    - ending -> 'nd'
 * - ELSE IF ends with '3'
 *  - ending -> 'rd'
 * - Else
 *    - ending -> th 
*/

function century(year) {
  let century = Number(String(year).slice(0, -2)) || 0;
  if (year % 100 > 0) century += 1;

  let last2 = String(century).slice(-2);
  let ending;

  if (last2.startsWith('1') && last2 >= 11) {
    ending = 'th';
  } else if (last2.endsWith('1')) {
    ending = 'st';
  } else if (last2.endsWith('2')) {
    ending = 'nd';
  } else if (last2.endsWith('3')) {
    ending = 'rd';
  } else {
    ending = 'th';
  }

  console.log(century + ending);
}

// better sol
function century1(year) {
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

century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th" 
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"  