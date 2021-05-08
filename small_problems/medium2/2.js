/**
 * P---------------------
 * input: function (3 floating-point numbers)
 * output: string
 * rules:
 * To be a valid triangle:
    1. the sum of the lengths of the two shortest sides 
    must be greater than the length of the longest side,
    2. every side must have a length greater than 0

 * D------------------
  
    Equilateral: All three sides are of equal length.
  Isosceles: Two sides are of equal length, while the third is different.
  Scalene: All three sides are of different lengths.

  'equilateral', 'isosceles', 'scalene', or 'invalid'


 * A-----------------
 * - func (side1, side2, side3)
 * - put the @side's values into @sideArr
 * - set @sideArr to => iterate over @sideArr, 
 *  order the sides from least to greatest in length
 *  - IF the side[0] is <= 0 OR if sum of side[0] and side[1] < side[2]
 *    - return 'invalid' 
 *  - ELSE IF side[0] === side[1] && side [1] === side[2]
 *    - return 'equilateral',
 *  - ELSE IF side[0] !== side[1] && side[0] !== side[2] && side[1] !== side[2]
 *    - return 'scalene'
 *  - ElSE
 *    - return 'isosceles'
 * 
*/

// E: test cases
console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"

function triangle(side1, side2, side3) {
  [short, mid, long] = [...arguments].sort();  

  if (short <= 0 || short + mid < long) {
    return 'invalid';
  } else if (short === mid && mid === long) {
    return 'equilateral';
  } else if (short === mid || short === long || mid === long) {
    return 'isosceles';
  } else {
    return 'scalene';
  }
}