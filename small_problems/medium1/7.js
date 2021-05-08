/**
 * P---------------------
 * input: func (number)
 * output: number
 * rules:
 * - Rewrite your recursive fibonacci function so that it computes
 *   its results without using recursion.

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
  F7: 5 + 8 -> 13

 * A-----------------
 * - start a loop from @n value of '3' to <= @nth
 *    where @n is the current @nth value
 *  
 * 
*/

// E: test cases
console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050


function fibonacci1(nth) { 
  let previousTwo = [1, 1];
  
  for (let currentNth = 3; currentNth <= nth; currentNth += 1) {
    previousTwo = [previousTwo[1], previousTwo[0] + previousTwo[1]];
  }

  return previousTwo[1];
}

// n = 3 =>  [1, 2]
// n = 4 => [2, 3]
// n = 5 => [3, 5]
// n = 6 => [5, 8]




function fibonacci(nth) {
  let nums = [0, 1, 1];
  if (nth === 1 || nth === 2) return 1;
  else {
    for (let currentNth = 3; currentNth <= nth; currentNth += 1) {
      nums[currentNth] = nums[currentNth- 1] + nums[currentNth - 2];
    }
    return nums[nums.length - 1];
  }
}
