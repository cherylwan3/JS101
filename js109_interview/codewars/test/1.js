// Write a function that returns all pairs of elements in an array that when you subtract the second number from the first number you get 3.
// The original array may contain duplicate numbers. Each two-element
// subarray in your output should be distinct. Subarrays themselves should
// be ordered in the same sequence as they appear in the original array.
//
// Return an empty array if no 2 elements can be subtracted to equal 3 or there are fewer
// than 2 elements in the array.

/**
input: arr of nums
output: arr of subArr of number pairs, empty array if no subarr
-num1 - num2 === 3
- subArr number pairs distinct
- ordered in original array

[[0, 10], [10, -1]
-A-
- declare arr[];
- func(arrNums)
- iterate over arrNums from idx1 0 to < arrNums's length - 1
  - iterate over arrNums from idx2 = idx1 + 1 < arrNum's length
  - let subArr1 = [];
   - num1 = number at idx1
   - num2 = number at idx2
   - place the numbers into the subArr
   - if num1 - num2 === 3, push subArr into arr
- filter arr for duplicate arr
  - use map 
  - filter arr for 
- return arr
*/

function twoSubtract(arrNums) {
  let bigArr = [];
  
  for (let idx1 = 0; idx1 < arrNums.length - 1; idx1 +=1) {
    for (let idx2 = idx1 + 1; idx2 < arrNums.length; idx2 +=1) {
      let subArr = [];
      let num1 = arrNums[idx1];
      let num2 = arrNums[idx2];
      subArr[0] = num1;
      subArr[1] = num2;
      if (num1 - num2 === 3) bigArr.push(subArr);
    }
  }
  
  // iterate over bigArr, for each bigSubArr
  // if resultArr doesn't include bigSubArr
    // push the bigSubArr into resultArr
  // return resultArr
  
  let resultArr = [];
  
  bigArr.forEach(bigSubArr => {
    if (!includes(resultArr, bigSubArr)) {
      resultArr.push(bigSubArr);
    }
  });
 
  
  return resultArr;
}

function includes(resultArr, subArr) {
  let num1 = subArr[0];
  let num2 = subArr[1];
  
  for (let idx = 0; idx < resultArr.length; idx += 1) {
    let resultSubArr = resultArr[idx];
    let result1 = resultSubArr[0];
    let result2 = resultSubArr[1];
    
    if (num1 === result1 && num2 === result2) return true;
  }
                 
  return false;
}

// console.log(includes([ [ -4, -7 ], [ 7, 4 ], [ 7, 4 ] ], [ 7, 4 ]));

console.log(twoSubtract([0, 10, -1, -1, 1])); // []
console.log(twoSubtract([0, 10, 2, 5, 10, -10])); // []
console.log(twoSubtract([5, 2, 3])); // [[5,2]]
console.log(twoSubtract([1])); // []
console.log(twoSubtract([12, -4, 4, 11, 7, 4, -7, 5, 4])); // [[-4, -7], [7, 4]]