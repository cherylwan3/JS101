/**
 * triangle(5)
 *  space 4 *
 *  space 3 **
 *  space 2 ***
 *  space 1 ****
 *  ******
 * 
 * func (num) 
 *  start a loop with @stars from 1 to num
 *     log #(num - stars) empty spaces + #(stars) *
 *
 */

triangle(5);
triangle(9);

function triangle(num) {
  for (let stars = 1; stars <= num; stars += 1) {
    console.log(`${' '.repeat(num - stars)}${'*'.repeat(stars)}`);
  }
}