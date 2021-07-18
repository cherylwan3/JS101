// https://www.codewars.com/kata/5679aa472b8f57fb8c000047
// Equal Sides Of An Array

/**
 * func (arr of int)
 * output: lowest index N 
 * - sum of int left of N === sum of int (right of N)
 * - return -1 if no index could make that happen
 * 
 * - empty arrays at idx N of 0 - sum is 0

 * A----------
 * iterate over the array with idx
 * left side of array => arr.slice(0, idx)
 * right side of array => arr.slice(idx + 1) 
 * 
 * sum of both left and right side and compare it
 * if its equal, return the idx
 * 
 * return -1
*/

function findEvenIndex(arr) {
  for (let idx = 0; idx < arr.length; idx += 1) {
    let leftArr = arr.slice(0, idx);
    let rightArr = arr.slice(idx + 1);

    if (sumArr(leftArr) === sumArr(rightArr)) return idx;
  }

  return -1;
}

function sumArr(arr) {
  return arr.reduce((total, int) => total + int, 0);
}


console.log(findEvenIndex([1,2,3,4,3,2,1])) // ,3, "The array was: [1,2,3,4,3,2,1]
console.log(findEvenIndex([1,100,50,-51,1,1])) //,1,
console.log(findEvenIndex([1,2,3,4,5,6])) //,-1, "The array was: [1,2,3,4,5,6] \n");
console.log(findEvenIndex([20,10,30,10,10,15,35])) //,3, "The array was: [20,10,30,10,10,15,35] \n");