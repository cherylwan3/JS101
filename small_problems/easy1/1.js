/**
 * Problem:
 * Write a function that takes one integer argument, which may be positive,
 *  negative, or zero. This method returns true if the number's absolute value
 * is odd. You may assume that the argument is a valid integer value.
 * 
 * *** P: understanding the problem ***
 * 
 * Rules:
 * - write a function 
 * - function takes one argument
 * - argument is a valid integer value 
 *  - integer argument (may be positive, negative, or 0)
 *  - function returns true if integer argument's absolute value is odd 
 * Input:
 * - one integer argument (may be positive, negative, or 0)
 * Output:
 * - true or false 
 * 
 * *** E: Examples/test cases ***
 * 
 * console.log(isOdd(2)); // => false
 * console.log(isOdd(5)); // => true
 * console.log(isOdd(-17)); // => true
 * console.log(isOdd(-8)); // => false
 * console.log(isOdd(0)); // => false
 * console.log(isOdd(7)); // => true
 * 
 * *** D: Data Structure/ A: Algorithm ***
 * - check for absolute value of integer argument 
 * 1. create a function called 'isOdd()' that takes one integer as an argument 
 * 2. Declare a variable called 'absoluteValue'
 * 3. Check the absolute value of the integer argument and set it to 'absoluteValue'
 * 4. check if 'absoluteValue' is odd
 * 5. if it is odd, return 'true'
 * 6. if it even, return 'false'
 */

// my solution:
function isOdd(num) {
  if (Math.abs(num) % 2 === 0) {
    return false;
  } 

  return true;
}

console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true

// Better solution:
function isOdd2(number) {
  return Math.abs(number) % 0 === 1;
}