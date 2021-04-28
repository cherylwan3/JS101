/**
 * P--------------------------------
 * input: function (num, num, num)
 * output: number, number
 * rules:
 * - 3 numbers passed to function
 * - function calculates average of 3 numbers
 *  - returns the letter grade of that average
 * 90 <= score <= 100: 'A'
  80 <= score < 90: 'B'
  70 <= score < 80: 'C'
  60 <= score < 70: 'D'
  0 <= score < 60: 'F'
  - Tested values are all between 0 and 100. 
  - There is no need to check for negative values or values greater than 100.

  A--------------------------
  - function getGrade(num1, num2, num3)
    - function average(num1, num2, num3)
      - return average of all 3 numbers
    
    - declare an average $avg and set it to average(num1, num2, num3)
    - IF $avg is <= 90 and >= 100
      return the letter 'A'
    - ELSE IF etc.

*/

function getGrade(num1, num2, num3) {
  let average = (num1 + num2 + num3) / 3;

  if (average >= 90 && average <= 100) {
    return 'A';
  } else if (average >= 80) {
    return 'B';
  } else if (average >= 70) {
    return 'C';
  } else if (average >= 60) {
    return 'D';
  } else {
    return 'F';
  }
}

console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(50, 50, 95));    // "D"
