/**
 * func (angle btw 0 and 360 degrees)
 * returns: str
 * str:
 * degree, min, sec
 * 
 * 60 minutes in a degree 
 * 60 seconds in a minute
 * 
 * dms (76.73)
 * degree = Math.floor(angle);
 * degreeRemainder= angle - degree;
 * let minRemaining = degreeRemainder * MIN_PER_DEGREE;
 * min = Math.floor(minRemaining);
 * sec = (minRemanining % 1) * SECONDS_PER_MINUTE
 *
 * 
 * 
**/

const DEGREE = '˚';
const MIN = "'";
const SEC = '"';

const MIN_PER_DEGREE = 60;
const SECONDS_PER_MINUTE = 60;

function dms(angle) {
  let degree = Math.floor(angle);
  let degreeRemainder = angle - degree;

  let minRemaining = degreeRemainder * MIN_PER_DEGREE;
  let min = Math.floor(minRemaining);
  let sec = Math.floor((minRemaining % 1) * SECONDS_PER_MINUTE);

  degree = lengthTo2(degree);
  min = lengthTo2(min);
  sec = lengthTo2(sec);

  let result = degree + DEGREE + min + MIN + sec + SEC;

  console.log(result);
  return result;
}

function lengthTo2(num) {
  return (String(num).length < 2) ? `0${num}` : num;
}

dms(30);           // 30°00'00"
dms(76.73);        // 76°43'48"
dms(254.6);        // 254°35'59"
dms(93.034773);    // 93°02'05"
dms(0);            // 0°00'00"
dms(360);          // 360°00'00" or 0°00'00"
