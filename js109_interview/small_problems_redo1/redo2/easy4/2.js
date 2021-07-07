/**
 * get nums 1 - 5 and put it into @numArray
 * 
 * if last num is inside numArray -> appears, if not -> does not appear
 * 
 * log the string to console with array joined together
 * 
 */

let readline = require('readline-sync');

let count = ['1st', '2nd', '3rd', '4th', '5th'];
let numArr = [];

for (let idx = 0; idx < count.length; idx += 1) {
  let num = readline.question(`Enter the ${count[idx]} number: `);
  numArr.push(+num);
}

let lastNum = +readline.question('Enter the last number: ');

let appearOrNot = numArr.includes(lastNum) ? 'appears' : 'does not appear';
console.log(`The number ${lastNum} ${appearOrNot} in ${numArr.join()}.`);

