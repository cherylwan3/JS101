/**
 * F(1) = 1
F(2) = 1
F(3) = 2;
F(4) = 3;
F(5) = 5;
F(6) = 8;

F(n) = F(n - 1) + F(n - 2) where n > 2 
P--------
write recursive function that computes nth fibNum, 
E----------
[1, 1, 2, 3, 5, 8...
A-------
let first = 1;
let second = 1;

*/

function fibonacci(num) {
  if (num <= 2) {
    return 1;
  }
  return fibonacci(num - 1) + fibonacci(num - 2);
}


console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765