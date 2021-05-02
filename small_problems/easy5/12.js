/**
 * P----------------------------
 * input: function1 (24 hour format time), function2 (24 hour format time)
 * output: number
 * rules:
 * - both functions takes in 24 hour format time 
 * - returns number of minutes before or after midnight respectively
 * - both functions in range: 0..1439
 * D-------------------------
 * afterMidnight (timeString)
 * "12:34" === 754
 * hour = 12;
 * timeMinutes = 34; 
 * totalMinutes = hour * 60 + timeMinutes -> 754
 * totalMinutes = totalMinutes % 1440  -> 754
 * 
 * 24:00 === 0 
 * hour = 24;
 * timeMinutes = 0
 * totalMinutes = 24 * 60 + 0 -> 1440
 * totalMinutes = totalMinutes % 1440 -> 0
 * 
 * beforeMidnight (timeString)
 * "12:34" === 686
 * hour = 12;
 * timeMinutes = 34; 
 * totalMinutes = hour * 60 + timeMinutes -> 754
 * totalMinutes = 1440 % 754 = 686
 * 
 * 24:00 === 0 
 * hour = 24;
 * timeMinutes = 0;
 * totalMinutes = 24 * 60 + 0 -> 1440
 * totalMinutes = 1440 % 1440 
 * 
 * 
 * A-----------------------
 * - declare constants:
 *    @MINUTES_PER_HOUR = 60 
 *    @MINUTES_PER_DAY = 1440
 * 
 * write a function @getTotalMinutes with parameter @timeString
 *    - declare a variable @timeHours and set it to 
 *        - the numbers before ':' within @timeString
 *    - declare a variable @timeMinutes and set it to 
 *        - numbers after ':' within @timeString
 *    - declare variable @totalMinutes and set it to 
 *      - multiply @timeHours by @MINUTES_PER_HOUR,
 *      - add @timeMinutes    
 *
 * write a function @afterMidnight with parameter @timeString    
 *   - declare a variable @totalMinutes and set it to 
 *      - call @getTotalMinutes with argument @timeString   
 *   - declare and set @minutes to @totalMinutes % @MINUTES_PER_DAY
 *   - return @minutes
 * 
 * write a function @beforeMidnight with parameter @timeString
 * - declare a variable @totalMinutes and set it to 
 *      - call @getTotalMinutes with argument @timeString
 *  -declare @minutes and set it to @MINUTES_PER_DAY % @totalMinutes
 *  - return @minutes
*/ 

// code, like book's method 
const HOURS_PER_DAY = 24;
const MINUTES_PER_HOUR = 60;
const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

function afterMidnight(timeString) {
  let [timeHours, timeMinutes] = timeString.split(':').map(num => Number(num));
  
  return ((timeHours * MINUTES_PER_HOUR) + timeMinutes) % MINUTES_PER_DAY;
}

function beforeMidnight(timeString) {
  let deltaMinutes = MINUTES_PER_DAY - afterMidnight(timeString);

  if (deltaMinutes === MINUTES_PER_DAY) {
    deltaMinutes = 0;
  }
  return deltaMinutes;
} 

// examples
console.log(afterMidnight("00:00") === 0); 
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);   

