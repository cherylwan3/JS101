/**
 * func (min)
 * returns time format
 * 
 * A---
 * aftermidnight:
 * get remainder of totalMIN / MIN_PER_DAY -> totalMin
 * divide by HRS_PER_DAY to get hrs
 * the remainder -> min
 * 
 * 
 * beforemidnight: 
 * min = MIN_PER_DAY - min
 * divide by HRS_PER_DAY to get hrs
 * the remainder -> min
 * 
 * E----
 * 
 * 
 */

const MIN_PER_HOUR = 60;
const HRS_PER_DAY = 24;
const MIN_PER_DAY = MIN_PER_HOUR * HRS_PER_DAY; //1440

function timeOfDay(totalMin) {
  totalMin %= MIN_PER_DAY;
  if (totalMin < 0) totalMin = MIN_PER_DAY + totalMin;

  let min = totalMin % MIN_PER_HOUR;
  let hrs = Math.floor(totalMin / MIN_PER_HOUR);

  return `${toLength2(hrs)}:${toLength2(min)}`;
}

function toLength2(num) {
  return String(num).length < 2 ? '0' + num : num;
}


console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");