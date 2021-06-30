/**
 * minutes returned btw: 0..1439
 * 1) get the hrs and min in number format
 * 2) minutes = multiply hrs by MIN_PER_HOUR + min
 * afterMidnight (timeFormat) ----
 * * 1) get the hrs and min in number format
 * 2) minutes = multiply hrs by MIN_PER_HOUR + min
 * 
 * beforeMidnight(timeFormat)------
 * 3) minutes = MIN_PER_DAY - minutes
*/

const MIN_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const MIN_PER_DAY = MIN_PER_HOUR * HOURS_PER_DAY; // 1440


function afterMidnight(time) {
  let [hrs, min] = time.split(':').map(timeStr => Number(timeStr));
  let minutes = ((hrs * MIN_PER_HOUR) + min) % MIN_PER_DAY;

  return minutes;
}

function beforeMidnight(time) {
  let minutes = afterMidnight(time);
  minutes = (MIN_PER_DAY - minutes) % MIN_PER_DAY;

  return minutes;
}

console.log(afterMidnight("00:00") === 0);
//console.log(afterMidnight("00:00"));

console.log(beforeMidnight("00:00") === 0);
//console.log(beforeMidnight("00:00"));

console.log(afterMidnight("12:34") === 754);
//console.log(afterMidnight("12:34"));

console.log(beforeMidnight("12:34") === 686);
//console.log(beforeMidnight("12:34"));

console.log(afterMidnight("24:00") === 0);
//console.log(afterMidnight("24:00"));

console.log(beforeMidnight("24:00") === 0);
//console.log(beforeMidnight("24:00")); 
