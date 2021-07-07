/**
 * P---------------------
 * input: func (num)
 * output: num
 * rules:
 * -  Fibonacci series is a sequence of numbers where
 *    each number is the sum of the previous two numbers.
 * - Write a recursive function that computes the nth Fibonacci number, 
 *  where nth is an argument passed to the function. 
 * D------------------
 * F(1) = 1
  F(2) = 1
  F(n) = F(n - 1) + F(n - 2) where n > 2

  F1: 1,
  F2: 1,
  F3: 1 + 1 -> 2
  F4: 1 + 2 -> 3
  F5: 2 + 3 -> 5
  F6: 3 + 5 -> 8

  ex of recusion:
  function sum(num) {
    if ( num === 1) {
      return 1;
    }
    return num + sum(num - 1);
  }
 * A-----------------
 * - func finbonacci (num)
 * - if num < 3, return 1
 * - return F (num - 1) + F (num - 2)
 * - num -= 1
 * 
*/


function fibonacci(nth) { 
  if (nth <= 2) {
    return 1;
  } 
  return fibonacci(nth - 1) + fibonacci(nth - 2);
}

// E: test cases
console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765

// big nums -> very slow
/* console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050 */