// best travel
// https://www.codewars.com/kata/55e7280b40e1c4a06d0000aa

// https://hmkcode.com/calculate-find-all-possible-combinations-of-an-array-using-java/
/**
 * func (t: maxSumDist, k: numTowns, ls: listDist)
 * func (num, num, array)
 * return: biggest sum of numTowns distances <= maxSumDist
 * 
 * E--
 * func(174, 3, ls)
 * 
 * E:
 * let ls = [1, 2, 3, 4], numTowns = 3
 * [1, 2, 3]
 * [1, 2, 4]
 * [1, 3, 4]
 * [2,3,4]
 *A--

 * let bigArr = [];
 * iterate from idx1 of 0 to <= ls.length - numTowns
 *  iterate from idx2 of idx1 + 1 to < ls.length;
 *    - push ls at idx1 to arr;
 *    - push ls at idx2 to arr;
 *    - push ls at idx2 + 1 to arr;
 *    - push arr to bigArr
 * 
 * bigArr=> iterate over bigArr with map,
 *  => return sum of every arr
 * 
 * sort bigArr by decreasing
 * iterate over bigSumArr using find ->
 *  if current sum is <= maxSumDist
 * 
 * return this value
*/

function chooseBestSum(maxSum, numTowns, ls) {
  let bigArr = [];
  for (let idx1 = 0; idx1 <= (ls.length - numTowns); idx1 += 1) {
    for (let idx2 = idx1 + 1; idx2 < ls.length; idx += 1) {
      for (let )
    }
  }
}

let ts = [50, 55, 56, 57, 58] 
chooseBestSum(163, 3, ts)//-> 163

let xs = [50];
chooseBestSum(163, 3, xs)
// -> null 
 
let ys = [91, 74, 73, 85, 73, 81, 87] 
chooseBestSum(230, 3, ys) // -> 228

chooseBestSum(163, 3, ts) //, 163