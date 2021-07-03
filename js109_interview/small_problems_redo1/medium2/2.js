/**
 * function (num1, num2, num3) 
 * output: string
 * 
 * put the numbers into an array
 *  - sort the array from least to greatest
 *  - if (short + mid < long]) ||
 *    arr's some value <= 0
 *        - return "invalid"
 * - if short === long equilateral
 *  else if short == mid || mid === long
 *    return scalene
 * else 
 *    return isosceles
 * 
 */
console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"

function triangle(num1, num2, num3) {
  let arr = [num1, num2, num3].sort();
  let [short, mid, long] = arr;

  if ((short + mid < long) || short <= 0) {
    return 'invalid';
  } else if (short === long) {
    return 'equilateral';
  } else if (short === mid || mid === long) {
    return 'isosceles';
  } else {
    return 'scalene';
  }
}