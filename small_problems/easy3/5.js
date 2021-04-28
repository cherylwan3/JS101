/**
 * P --------------------------
 * input: function, argument: positive integer n
 * output: right triangle of stars, sides have n stars
 * rules:
 * - hypotenuse:
 *    - one end: lower left of triangle
 *    - other end: upper right
 * E------------------------------
  triangle(5);

      *
     **
    ***
   ****
  *****

  triangle(9);

          *
         **
        ***
       ****
      *****
     ******
    *******
   ********
  *********
  A ------------------------------
 * - function with argument $num
  - start a loop with counter at 1; 
 * - while counter is less than or equal to $num, 
    - log a $(num - counter) number of one spaced string ' ' + $counter number of stars *
    - increment $counter by 1 
 *  
 */
// my method
function triangle(num) {
  for (let stars = 1; stars <= num; stars += 1) {
    console.log(' '.repeat(num - stars) + '*'.repeat(stars));
  }
}

// book's method
function triangle1(height) {
  let spaces = height - 1;
  let stars = 1;
  while (height > 0) {
    console.log(`${" ".repeat(spaces)}${"*".repeat(stars)}`);
    spaces -= 1;
    stars += 1;
    height -= 1;
  }
}

// Ex
triangle(5);
triangle(9);


