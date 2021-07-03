/**
 * func (angle1, angle2, angle3)
 * output: str
 * 
 * put angles into an array && sort the array from least to greatest
 * small, mid, big 
 * 
 * test if sum of angles !== 180 && small <= 0
 *  return 'invalid' 
 * 
 * if (big < 90) acute
 * else if (array.some(angle => angle > 90)) obtuse
 * else right angle 
 * 
*/

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"

function triangle(angle1, angle2, angle3) {
  let [small, mid, big] = [...arguments].sort((a,b) => a - b);
  if (small <= 0 || small + mid + big !== 180) {
    return 'invalid';
  } else if (big < 90) {
    return 'acute';
  } else if (big === 90) {
    return 'right';
  } else {
    return 'obtuse';
  }
}

