/**
 * P---------------------
 * input: func (num)
 * output: num
 * rules:
 * - func returns difference btw:
 *  1) square of the sum of the first count positive integers MINUS
 *  2) the sum of the squares of the first count positive integers.
 * D------------------
 * - sumSquareDifference(3);
 * numbers = [1, 2, 3]
 * --------------------------------
 * - func @difference (num1, num2)
 *  - num1- num2
 * -------------------------------
 * // sum of the first count positive integers
 * - func @sumArry
 *  - iterate over @numbers
 *    - add all the elements together
 *    - returns total @sum number
 * ----------------------------
 * - func @square (num)
 *  - returns num ** 2
 * A-----------------
 * - function sumSquareDifference(count)
 * - declare @diffNum1 @diffNum2 @currentSum
 * 
 * // for differ
 * - declare @numbers to and set it to []
 * - start a loop and iterate from counter of 1 to count
 *     - append (idx + 1) to numbers
 * - end loop
 * -set @currentSum to: call @sumArray on @numbers 
 * - set @diffNum1 to @currentSum
 * - set @diffNum1 calling @square on @currentSUm
 * 
 * // for diffNum2
 * - set @squaredNumbers to: 
 * - start loop: iterate over @numbers array -> 
 *    - call @square on every element @number
 *    - return the squared number
 * - end the loop
 * - set @diffNum2 to calling @sum on @squaredNumbers
 *    
 * //difference
 *  return diffNum1 - diffNum2
 * 
*/
/* // my long solution using many functions
function sumSquareDifference(count) {
  let numbers = getNumbersArray(count);
  let diffNum1 = square(sumArray(numbers));

  let squaredNumbers = numbers.map(num => square(num));
  let diffNum2 = sumArray(squaredNumbers);
  
  return diffNum1 - diffNum2;
}

function getNumbersArray(count) {
  let numbers = [];
  for (let counter = 1; counter <= count; counter += 1) {
    numbers.push(counter)
  }
  return numbers;
}

function sumArray(numArray) {
  return numArray.reduce((sum, num) => sum + num);
}

function square(num) {
  return num ** 2;
} */


// my shortened solution
function sumSquareDifference(count) {
  let numbers = [];

  for (let counter = 1; counter <= count; counter += 1) {
    numbers.push(counter)
  }

  let diffNum1 = (numbers.reduce((sum, num) => sum + num)) ** 2;

  let squaredNumbers = numbers.map(num => num ** 2);
  let diffNum2 = squaredNumbers.reduce((sum, num) => sum + num);
  
  return diffNum1 - diffNum2;
}


// ----------------------------------------------------------
// BEST SOLUTION: BOOK
function sumSquareDifference(count) {
  let sum = 0;
  let sumOfSquares = 0;
  
  for (let number = 1; number <= count; number += 1) {
    sum += number; 
    sumOfSquares += Math.pow(number, 2);
  }
  return Math.pow(sum, 2) - sumOfSquares;
}

// E: test cases
console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150