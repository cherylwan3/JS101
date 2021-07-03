console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050

function fibonacci(num) {
  let fib1 = 1;
  let fib2 = 1;
  let fibNum = 1;
  if (num <= 2) return fibNum;
  
  let count = 3;
  while (count <= num) {
    fibNum = fib1 + fib2;
    fib1 = fib2; 
    fib2 = fibNum; 
    count += 1;
  }

  return fibNum;
}



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
Fib(5)

[1, 1, 2, 3, 5, 8...
A-------
let first = 1;
let second = 1;

*/