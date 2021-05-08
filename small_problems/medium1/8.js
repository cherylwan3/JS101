/**
 * P---------------------
 * input:
 * output:
 * rules:
 * -
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

 * A-----------------
 * -
 * -
 * 
*/

// E: test cases
/* console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765 */


let memo = {};

function fibonacci(nth) { 
  if (nth <= 2) {
    return 1;
  } else if (memo[nth]) {
    return memo[nth];
  } else {
    memo[nth] = fibonacci(nth - 1) + fibonacci(nth - 2);
    return memo[nth];
  }
}


// E: test cases
console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765 

//test cases: big nums
console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050


