/**
 * P----------------------------
 * input: function (floating point number)
 * output: string
 * rules:
 * - floating point number represents angle btw 0 and 360 degrees
 * - returns string representing angle in degrees, minutes, seconds
 *    - use a degree symbol (˚) to represent degrees, 
 *    - a single quote (') to represent minutes, 
 *    -d ouble quote (") to represent seconds
 * -  60 minutes in a degree, and 60 seconds in a minute.
 * E-------------------------
 * D-----------------------
 * ex2: dms(76.73)
 * - 0.73 * 60 = 43.8
 * - 0.8 * 60 = 48
 * - 76.73 % 1 = 0.73000000
 * A-----------------------
 * 1. create a function named @dms with parameter named @angle
 * 2. create a @degree variable and set it to @angle without the digits after
 *    the decimal
 *    - use Math.floor on @angle and set it to @degree
 * 3. create a @minute variable and set it one-tenths place (0.1) of @angle
 *    - subtract @degree from @angle and multiply it by 60
 *    - set @minute to the result
 * 4. create a @seconds variable and set it to the one-hundreths place of @angle
 *    - get the one-tenths place of @minute 
 *        - get the remainder of @minute -> @minute % 1
 *     - then multiply @minute % 1 by 60 
 *     - set @seconds to the result
 * 5. Log this sentence: @degree + ° + @minute + ' + @seconds "
*/

const DEGREE = '\xB0'; // hexidemical number
// '°'.charCodeAt(0).toString(16) -> '\xB0'
const MINUTES_PER_DEGREE = 60;
const SECONDS_PER_MINUTE = 60;
const SECONDS_PER_DEGREE = SECONDS_PER_MINUTE * MINUTES_PER_DEGREE;

function dms(angle) {
  let degrees = Math.floor(angle);
  let minutes = Math.floor((angle - degrees) * MINUTES_PER_DEGREE);
  let seconds = Math.floor(
    (angle - degrees - (minutes / MINUTES_PER_DEGREE)) * 
    SECONDS_PER_DEGREE
  );

  let result =  String(degrees) + DEGREE + padZeroes(minutes) + "'" +
                                           padZeroes(seconds) + '"';
  console.log(result);
  return result;
}

function padZeroes(number) {
  let numString = String(number);
  return numString.length < 2 ? ('0' + numString) : numString;
}


//ex
dms(30);           // 30°00'00"
dms(76.73);        // 76°43'48"
dms(254.6);        // 254°35'59"
dms(93.034773);    // 93°02'05"
dms(0);            // 0°00'00"
dms(360);          // 360°00'00" or 0°00'00"

