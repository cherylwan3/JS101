/**
 * // P: 
 * Write a function that takes one integer argument, which may be positive, 
 * negative, or zero. This method returns true if the number's absolute 
 * value is odd. You may assume that the argument is a valid integer value.    
 * 
 * // input: func (integer argument: positive, negative, 0)
 * // ouput: boolean 
 * // - returns true if @number's absolute value is odd
 * 
*/
// A:
// - find the absolute value of @number and save this 
// - find out if that number is odd
// -if odd, return true, if even, return false
 

function isOdd(number) {
  let absNum = Math.abs(number);
  return absNum % 2 === 1; 
}

console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true