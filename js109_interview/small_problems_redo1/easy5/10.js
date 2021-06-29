average([1, 5, 87, 45, 8, 8]);       // 25
average([9, 47, 23, 95, 16, 52]);    // 40

/**
 * iterate over array
 * get the sum of all nums
 * divide sum by array's length
 * round sum down and return this number
*/

function average(arr) {
  let sum = arr.reduce((sum, num) => sum + num);
  let avg = Math.floor(sum / arr.length);
  
  console.log(avg);
  return avg;
}