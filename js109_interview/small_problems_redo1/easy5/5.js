/**
 * start a loop from idx 0 to < arr1.length
 * push element at index 0 in arr1 to arr
 * push element at index 0 in arr2 to arr
 * 
 * another way:
 * arr = 
 * arr1.map(_, idx) =>
 *  return [arr1[idx], arr2[idx]]
 * arr.flat()
 * 
 * return arr
 */



interleave([1, 2, 3], ['a', 'b', 'c']);    // [1, "a", 2, "b", 3, "c"]

function interleave(arr1, arr2) {
  let arr = arr1
    .map((_, idx) => [arr1[idx], arr2[idx]])
    .flat();
  
  console.log(arr);
  return arr;
}