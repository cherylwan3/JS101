/**
 * positive: time after midnight
 * negative: time before midnight
 * 
 * minute-based -> (hh:mm)
 * 
 * + after midnight:
 * 0: 00:00
 * 35: 00:35
 * 800: 13:20
 * 3000: 02:00
 * 
 * let totalMinutes = totalMinutes % MIN_PER_DAY;
 * let hours = Math.floor(totalMinutes / MIN_PER_HOUR);
 * let minutes = ((totalMinutes / MIN_PER_HOUR) % 1) * MIN_PER_HOUR;
 * 
 * - before midnight
 * -3: 23:57
 * -4231: 01:29  // 22: 30.9999
 * -1437: 00:03
 * 
 * if String(min).startsWith('-') 
 * hours = 24 - hours;
 * minutes = 60 - minutes;
*/

const MIN_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const MIN_PER_DAY = MIN_PER_HOUR * HOURS_PER_DAY; // 1440


function timeOfDay(minutes) {
  let totalMinutes = minutes % MIN_PER_DAY;
  if (minutes < 0) totalMinutes += MIN_PER_DAY;

  let hrs = Math.floor(totalMinutes / MIN_PER_HOUR);
  let min = totalMinutes % MIN_PER_HOUR;

  hrs = lengthTo2(hrs);
  min = lengthTo2(min);

  return `${hrs}:${min}`;
}

function lengthTo2(number) {
  return String(number).length === 2 ? number : '0' + number;
}

console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(-4231) === "01:29");
