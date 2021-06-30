sumOfSums([3, 5, 2]);        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
sumOfSums([1, 5, 7, 3]);     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
sumOfSums([4]);              // 4
sumOfSums([1, 2, 3, 4, 5]);  // 35

/**
 * func (arr)
 * returns: sum of 
 * sums of each leading subsequence in that array. 
 * get each subarray and add it to a totalArray using reduce
 *    getting subarray
 *      - iterate over arr, get array at 0, to idx + 1
 *  iterate through totalArray and use reduce to get sum
*/

function sumOfSums(arr) {
  let total = arr
    .reduce((accumArr, _, idx) => {
      return accumArr.concat(arr.slice(0, idx + 1));
    }, [])
    .reduce((sum, num) => sum + num);

  console.log(total);
}