/**
 * p--------
 * input: function (num)
 * output: sum
 * function rules:
 * - computes sum of all numbers btw 1 to @num inclusive
 *  - multiples of 3 or 5
 * - assume @num > 1
 * E-------------
 * 20: 3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20 -> 98
 * A--------------
 * - declare @sum
 * - iterate through nums 1 to @num
 *  - if multiple of 3 or 5, add to @sum
*/

multisum(3);       // 3
multisum(5);       // 8
multisum(10);      // 33
multisum(1000);    // 234168

function multisum(num) {
  let sum = 0;
  for (let int = 3; int <= num; int += 1) {
    if (int % 3 === 0 || int % 5 === 0) {
      sum += int;
    }
  }
  console.log(sum);
  return sum;
}