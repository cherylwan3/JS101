/**
 * fib1 = 1;
 * fib2 = 1;
 * fibNow = fib + fib2;
 * count = 3;
 * 
 * while (count < num)
 * fib1 = fib2;
 * fib2 = fibNow;
 * fibNow = fib1 + fib2;
 * count += 1
 * 
 * return the fibNow
*/

// another solution
function fibonacci(nth) {
  let fibArr = [1, 1];

  for (let idx = 2; idx <= nth - 1; idx += 1) {
    fibArr[idx] = fibArr[idx - 1] + fibArr[idx - 2];
  }

  return fibArr[nth - 1];
}

console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));      // 12586269025
console.log(fibonacci(75));      // 2111485077978050