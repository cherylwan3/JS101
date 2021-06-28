/**
 * function (angle btw 0 and 360)
 * return degree, minute, seconds
 * 
 * 1 degree = 60 minutes
 * 1 min = 60 seconds;
 * 
 * to get numbers after decimal: % 1
 * let MIN_PER_DEGREE = 60;
 * let SECONDS_PER_MIN = 60;
 * 
 * A---
 * 1. declare constants
 * 2. declare symbols 
 * 3. calculate the degree
 *  - degree = Math.floor(angle)
 * - remaining = (angle % 1)
 * 4. calculate the minutes
 *  - totalMinutes = MIN_PER_DEGREE * remaining
 *  - minutes = Math.floor(totalMinutes)
 *  - remaining = totalMinutes % 1
 * 5. calculate the seconds
 *  - totalSeconds = MIN_PER_DEGREE * remaining
 *  - seconds = Math.floor(totalSeconds)
 * 6. log the three together in one string
*/

const DEGREE = '°';
const MINUTES = "'";
const SECONDS = '"';

const MIN_PER_DEGREE = 60;
const SECONDS_PER_MIN = 60;

function dms(angle) {
  let degree = Math.floor(angle);
  let remaining = angle % 1;

  let totalMinutes = MIN_PER_DEGREE * remaining;
  let minutes = Math.floor(totalMinutes);
  remaining = totalMinutes % 1;

  let totalSeconds = MIN_PER_DEGREE * remaining;
  seconds = Math.floor(totalSeconds);

  if (String(minutes).length < 2) minutes = `0${minutes}`;
  if (String(seconds).length < 2) seconds = `0${seconds}`;

  console.log(degree + DEGREE + minutes + MINUTES + seconds + SECONDS);
}

dms(30);           // 30°00'00"
dms(76.73);        // 76°43'48"
dms(254.6);        // 254°35'59"
dms(93.034773);    // 93°02'05"
dms(0);            // 0°00'00"
dms(360);          // 360°00'00" or 0°00'00"