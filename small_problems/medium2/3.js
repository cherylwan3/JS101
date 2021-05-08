/**
 * P---------------------
 * input:
 * output:
 * rules:
 * - To be a valid triangle, 
 * 1) the sum of the angles must be exactly 180 degrees
 * 2) and every angle must be greater than 0.
 * D------------------
  Right: One angle === 90 degrees
  Acute: All three angles < 90 degrees.
  Obtuse: One angle is > 90 degrees.
 * A-----------------
 * - load the @degree into @angleArr
 * 
*/

// E: test cases
console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"

function triangle(angle1, angle2, angle3) {
  let angleArr = [...arguments].sort();
  [small, mid, big] = [...angleArr];

  if (small <= 0 || small + mid + big !== 180) {
    return 'invalid';
  } else if (angleArr.some(angle => angle === 90)){
    return 'right';
  } else if (angleArr.every(angle => angle < 90)) {
    return 'acute';
  } else {
    return 'obtuse';
  }
}
