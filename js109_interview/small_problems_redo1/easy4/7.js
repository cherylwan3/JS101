/**
 * fun in: array of nums
 * out: an array with same # elem, running total
 * 
 * A
 * iterate over array from idx 0 to array's length
 * - add the values inside array up to current idx -> @arrTotal
 * - append @arrTotal to @newArr
 * 
*/
console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []

function runningTotal(arr) {
  let newArr = [];
  
  for (let idx = 1; idx <= arr.length; idx += 1) {
    let arrTotal = arr.slice(0, idx).reduce((accum, num) => accum + num);
    newArr.push(arrTotal);
  }

  return newArr;
}

// my short method using map
function runningTotal(array) {
  let sum = 0;
  let result = array.map(num => sum += num);

  console.log(result);
  return result;
} 
