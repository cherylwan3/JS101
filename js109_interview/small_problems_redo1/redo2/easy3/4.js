 // The last example may take a minute or so to run.
/**
 * func(numOfDigits) 
 * return: first fib number that has @numOfDigits digits
 * rules:
 *  - numOfDigits >= 2 
 * 
 * fib : [1, 1, 2, 3,]
 * 
 * let idx = 1;
 * while fib[idx]'s length <= @numOfDigits
 * fib[idx] = fib[idx - 2] + fib[idx - 1 ]
 * fib.push(fib[idx - 2] + fib[idx - 1 ])
 * idx += 1
 * return idx + 1 
*/

/* function findFibonacciIndexByLength(numOfDigits) {
  let fibArr = [1n, 1n];
  let idx;
  
  for (idx = 2n; String(fibArr[idx - 1n]).length < numOfDigits; idx += 1n) {
    fibArr[idx] = fibArr[idx - 2n] + fibArr[idx - 1n];
  }

  //console.log(fibArr);
  //console.log(idx);
  return idx;
} */

function findFibonacciIndexByLength(numOfDigits) {
  let fibArr = [1n, 1n];
  let idx;
  
  for (idx = 1n; String(fibArr[idx]).length < numOfDigits; idx += 1n) {
    fibArr[idx + 1n] = fibArr[idx] + fibArr[idx - 1n];
  }

  //console.log(fibArr);
  //console.log(idx);
  return idx + 1n;
}


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


console.log(findFibonacciIndexByLength(2n) === 7n);
console.log(findFibonacciIndexByLength(3n) === 12n);   // 1 1 2 3 5 8 13 21 34 55 89 144
console.log(findFibonacciIndexByLength(10n) === 45n);
console.log(findFibonacciIndexByLength(16n) === 74n);
console.log(findFibonacciIndexByLength(100n) === 476n);
console.log(findFibonacciIndexByLength(1000n) === 4782n);
//console.log(findFibonacciIndexByLength(10000n) === 47847n);
