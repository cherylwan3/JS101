/**
 * double nums:
 * 103103 44 3333 7676
 *  
 * not double nums:
 * 444 334433 107
 * 
 * 
 * ex] 103103
 * length - 6
 * midIdx: 6 / 2 - 1 -> 3
 * 012345
 * 
 * ex] 444
 * length of 3
 * midIdx: 3/ 2 = 1.5
 *
 * A-------------
 * func input: num
 * output: num * 2 OR if double num, return num
 * 
 * check to see if double num
 * - turn into string -> @strNum
 * - divide str by 2 -> @midIdx
 * - get first half of string and compare with second half of string
 *    - if equal, then its a double num
 *        multiply @num by 2 and return this
 *    - else, its not a double num
 *       return @num
 *  
 */

function twice(num) {
  let strNum = String(num);
  let midIdx = strNum.length / 2;

  let firstHalf = strNum.slice(0, midIdx);
  let secondHalf = strNum.slice(midIdx);

  console.log(firstHalf === secondHalf ? num : num * 2);
  return firstHalf === secondHalf ? num : num * 2;
}

twice(37);          // 74
twice(44);          // 44
twice(334433);      // 668866
twice(444);         // 888
twice(107);         // 214
twice(103103);      // 103103
twice(3333);        // 3333
twice(7676);        // 7676