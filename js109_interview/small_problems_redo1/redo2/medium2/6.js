/**
 * func (num)
 * func output: numA - numB
 * 
 * A----
 * * numA]
 * numA
 * numB
 * loop from 1 to <= num
 *  - add counter to numA
 *  - add counter squared to numB
 * numA = numA squared
 * 
 * return numA - numB
 * 
 * 
 */
sumSquareDifference(3);      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
sumSquareDifference(10);     // 2640
sumSquareDifference(1);      // 0
sumSquareDifference(100);    // 25164150

function sumSquareDifference(num) {
  let numA = 0;
  let numB = 0;

  for (let counter = 1; counter <= num; counter += 1) {
    numA += counter;
    numB += counter ** 2;
  }

  let result = (numA ** 2) - numB;
  return result;
}