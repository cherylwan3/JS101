/**
 * declare returnArr
 * iterate over arr1.length
 * multiply value at same index and append to returnArr
*/
console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]

function multiplyList(arr1, arr2) {
  return arr1.map((value, idx) => value * arr2[idx])
}