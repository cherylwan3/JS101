/**
 * func ()
 * - computes difference btw
 *  A) (sum of first @count numbers) squared
 * B) sum of (@count squared numbers)
 * 
 * A-------
 * let difA = 0;
 * let difB = 0;
 * 
 * start a loop from 1 to number, increment by 1
 *  for each loop, add counter to diffA
 *  add counter ** 2 to diffB

 * 
 * result = diffA ** 2;- diffB
 * 
 * 
*/

sumSquareDifference(3);      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
sumSquareDifference(10);     // 2640
sumSquareDifference(1);      // 0
sumSquareDifference(100);    // 25164150

function sumSquareDifference(count) {
  let diffA = 0;
  let diffB = 0;

  for (let num = 1; num <= count; num += 1) {
    diffA += num;
    diffB += (num ** 2);
  }

  let result = (diffA ** 2) - diffB;

  console.log(result);
  return result;
}

