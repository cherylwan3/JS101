/** 
 * input: digits
 * output: index of first Fibonacci number that has the number of digits 
 * 1, 1, 2, 3, 5, 8, 13, 21, ...
 * 0  1  2  3
 * - index starts from 1
 * 
 * A--
 * 
 *   let fibNum = 1
 * let fibNumArr = [1]
 * let idx = 0;
 * 
 * - while true;
 *  - fibNum = fibNum[idx];
 *    - convert fib num to string, get string's length
 *    - if string's length === digit break
 *  - if fibNumArr.length === 1, fibNumArr.push(1)
 *  - else fibNumArr.push(fibNumArr[idx - 1] + fibNumArr[idx - 2])
 *  - idx += 1;
 * 
 *  - return fibNumArr.length
 * 
*/

// accounts for digit of 1n
function findFibonacciIndexByLength (digits) {
  let fibNum1 = 1n;
  let fibNum2 = 1n;
  let count = 2n;
  let fibNum;

  if (digits === 1n) return 1n;
  
  do {
    fibNum = fibNum1 + fibNum2;
    count += 1n;
    
    fibNum1 = fibNum2;
    fibNum2 = fibNum;
  } while (String(fibNum).length < digits)

  return count;
} 

// book's method 
function findFibonacciIndexByLength1(length) {
  let first = 1n;
  let second = 1n;
  let count = 2n;
  let fibonacci;

  do {
    fibonacci = first + second;
    count += 1n;
    first = second;
    second = fibonacci;
  } while (String(fibonacci).length < length);

  return count;
}


console.log(findFibonacciIndexByLength(1n) === 1n); 
console.log(findFibonacciIndexByLength(2n) === 7n);    // 1 1 2 3 5 8 13
console.log(findFibonacciIndexByLength(3n) === 12n);   // 1 1 2 3 5 8 13 21 34 55 89 144
console.log(findFibonacciIndexByLength(10n) === 45n);
console.log(findFibonacciIndexByLength(16n) === 74n);
console.log(findFibonacciIndexByLength(100n) === 476n);
console.log(findFibonacciIndexByLength(1000n) === 4782n);
console.log(findFibonacciIndexByLength(10000n) === 47847n); 
// The last example may take a minute or so to run.
