/**
 * have a total
 * get each subarray of arr
 *  get the sum of each subarray and add it to sum
 *  
 * get each subarray of arr
 * use for each, 
 * -slice (0, curentIdx + 1)
 * 
 */


sumOfSums([3, 5, 2]);        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
sumOfSums([1, 5, 7, 3]);     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
sumOfSums([4]);              // 4
sumOfSums([1, 2, 3, 4, 5]);  // 35


function sumOfSums(arrNums) {
  let totalSum = arrNums.reduce((total, _, idx) => {
    return total + arrNums.slice(0, idx + 1).reduce((subTotal,num) => {
      return subTotal + num;
    });
  }, 0);

  console.log(totalSum);
  return totalSum;
}


