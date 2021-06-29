union([1, 3, 5], [3, 6, 9]);    // [1, 3, 5, 6, 9]

/**
 * func (arr1, arry2)
 * 
 * let arr = arr1.concat(arr2)
 * sort the array
 * iterate through array from idx 0 to arr's length - 1
 *  if arr[idx] === arr[idx + 1], delete this element
*/

function union(arr1, arr2) {
  let arr = arr1.concat(arr2);
  arr.sort();

  for (let idx = 0; idx < arr.length; idx += 1) {
    if (arr[idx] === arr[idx + 1]) arr.splice(idx, 1);
  }

  console.log(arr);
  return arr;
}

function union(array1, array2) {
  let joinedArray = [...array1, ...array2]; 
  let resultArray = [];
  joinedArray.forEach(num => {
    if (!resultArray.includes(num)) {
      resultArray.push(num);
    }
  });
  console.log(resultArray);
  return resultArray;
}
