//Further exploration
const HOURS_PER_DAY = 24;
const MINUTES_PER_HOUR = 60;
const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

function afterMidnight(time) {
  let date = new Date(`Jan 1, 2000 ${time}:00`);
  let hours = date.getHours();
  let minutes = date.getMinutes();

  return ((hours * MINUTES_PER_HOUR) + minutes) % MINUTES_PER_DAY;  
}

function beforeMidnight(time) {
  let deltaMinutes = MINUTES_PER_DAY - afterMidnight(time);

  if (deltaMinutes === MINUTES_PER_DAY) {
    deltaMinutes = 0;
  }
  return deltaMinutes;
} 


// ex
console.log(afterMidnight("00:00") === 0); 
console.log(beforeMidnight("00:00") === 0); 
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);   

