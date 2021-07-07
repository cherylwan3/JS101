/**
 * get the hr, convert to number
 * get the min, convert to number
 * 
 * mul
 * E---12:34
 * 
 * afterMidnight
 *  result = multiply hr by 60 + min
 *  result = result % 1440
 * 
 * beforeMidnight
 *    call afterMidnight on timeFormat   
 * result = 1440 - result
 *    result = result % 1440;
 */
const MIN_PER_HOUR = 60;
const HRS_PER_DAY = 24;
const MIN_PER_DAY = MIN_PER_HOUR * HRS_PER_DAY; //1440

function afterMidnight(timeFormat) {
  let [hrs, min] = timeFormat.split(':').map(num => +num);
  return ((hrs * MIN_PER_HOUR) + min) % MIN_PER_DAY;
}

function beforeMidnight(timeFormat) {
  return (MIN_PER_DAY - afterMidnight(timeFormat)) % 1440;
}

console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);
