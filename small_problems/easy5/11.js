/**
 * P----------------------------
 * input: function(any integer)
 * output: (hh:mm) string 
 * rules:
 * - positive number: minutes after midnight
 * - negative: minutes before midnight 
 * - function should work with any integer input 
 * E-------------------------
 * D/A-----------------------
 * 35 
 * 
 * 
 * 
 * 1. write a function named @timeOfDay that takes in @totalMinutes
 * 2. declare a constant @MINUTES_PER_HOUR and set it to 60
 *    declare constant @HOURS_PER_DAY and set it to 24
 *    declare a variable @totalHours to Math.floor(@totalMinutes / @MINUTES_PER_HOUR )
 *    declare a variable @totalMinutesLeft to @totalMinutes % @MINUTES_PER_HOUR 
 *    declare a variable @returnHours
 *    declare a variable @returnMinutes
 * 3. IF totalMinutes is positive,
 *    @returnHours = @totalHours % @HOURS_PER_DAY
 *    @returnMinutes = @totalMinutesLeft
 *    ELSE
 *    @returnHours = Math.floor( @HOURS_PER_DAY + (@totalHours % @HOURS_PER_DAY ))
 *    @returnMinutes = @MINUTES_PER_HOUR + @totalMinutesLeft 
 * 4. return the string " @returnHours : @returnMinutes "
 *   
*/

// code
const MINUTES_PER_HOUR_1 = 60;
const HOURS_PER_DAY_1 = 24;

function padZero1(num) {
  let numString = String(num);
  return numString.length === 2 ? numString : ('0' + num); 
}

function formatTime1(hours, minutes) {
  return `${padZero1(hours)}:${padZero1(minutes)}`;
}

function timeOfDay1(totalMinutes) {
  let totalHours = totalMinutes / MINUTES_PER_HOUR_1;
  let totalMinutesLeft = totalMinutes % MINUTES_PER_HOUR_1;
  
  let returnHours;
  let returnMinutes;

  if (totalMinutes < 0) {
    returnHours = HOURS_PER_DAY_1 + Math.floor(totalHours % HOURS_PER_DAY_1);
    returnMinutes = MINUTES_PER_HOUR_1+ totalMinutesLeft;
  } else {
    returnHours = Math.floor(totalHours % HOURS_PER_DAY_1);
    returnMinutes = totalMinutesLeft;
  }

  let result = formatTime1(returnHours, returnMinutes);
  
  console.log(result);
  return result;
}


// ex
console.log(timeOfDay1(0) === "00:00");
console.log(timeOfDay1(-3) === "23:57");
console.log(timeOfDay1(35) === "00:35");

console.log(timeOfDay1(-1437) === "00:03");

console.log(timeOfDay1(3000) === "02:00"); 
console.log(timeOfDay1(800) === "13:20");

console.log(timeOfDay1(-4231) === "01:29"); 


//book solution (shorter)
const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR; //1440

function padZero(num) {
  let numString = String(num);
  return numString.length === 2 ? numString : ('0' + num); 
}

function formatTime(hours, minutes) {
  return `${padZero(hours)}:${padZero(minutes)}`;
}

function timeOfDay(deltaMinutes) {
  if (deltaMinutes < 0) { 
    deltaMinutes = (deltaMinutes % MINUTES_PER_DAY) + MINUTES_PER_DAY;
  } else {
    deltaMinutes = deltaMinutes % MINUTES_PER_DAY;
  }

  let returnHours = Math.floor(deltaMinutes / MINUTES_PER_HOUR);
  let returnMinutes = deltaMinutes % MINUTES_PER_HOUR;

  console.log(formatTime(returnHours, returnMinutes));
  return formatTime(returnHours, returnMinutes);
}

console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");

console.log(timeOfDay(-1437) === "00:03");

console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");