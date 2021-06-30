// multiply all combinations of pairs
// put into array
// return sorted ascending array


function multiplyAllPairs(arr1, arr2) {
  let comboArray = [];
  arr1.forEach(numArr1 => {
    arr2.forEach(numArr2 => comboArray.push(numArr1 * numArr2));
  })
  comboArray.sort((a, b) => a - b);
 
  console.log(comboArray);
  return comboArray;
}


multiplyAllPairs([2, 4], [4, 3, 1, 2]);    // [2, 4, 4, 6, 8, 8, 12, 16]