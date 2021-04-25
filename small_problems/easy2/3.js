/**
 * A---------------
 * - write a function named 'multiply'
 * - 2 arguments: num1, num2
 * - return num1 * num2
 */

/* // longer way
  function multiply(num1, num2) {
  return num1 * num2;
} */

// arrow function
const multiply = (num1, num2) =>  num1 * num2;


// Ex
console.log(multiply(5, 3) === 15); // logs true