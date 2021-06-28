/**
 * add all 3 nums and divide by 3 -> avg
 * if avg is <= 100 && avg >= 90 -> log 'A'
 * etc. etc.
*/

function getGrade(num1, num2, num3) {
  let avg = (num1 + num2 + num3) / 3;
 
  if (avg >= 90) {
    console.log('A');
  } else if (avg >= 80) {
    console.log('A');
  } else if (avg >= 70) {
    console.log('C');
  } else if (avg >= 60) {
    console.log('D');
  } else {
    console.log('F');
  }
}


getGrade(95, 90, 93);    // "A"
getGrade(50, 50, 95);    // "D"