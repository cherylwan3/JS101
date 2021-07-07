/**
 * func(nth)
 * nth - fib num
 * 1, 1, 2, 3, 5
 * fib1 = 1
 * fib2 = 1
 * fib3 = 2
 * fib4 = 3
 * fib5 = 5 
 * 
*/

function fibonacci(nth) {
  if (nth < 3) {
    return 1;
  }
  return fibonacci(nth - 2) + fibonacci(nth - 1);
}

console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765