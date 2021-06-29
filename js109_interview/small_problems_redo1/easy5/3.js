/**
 * func (arr)
 * returns: arr[arr1, arr2]
 * arr1: first half of arr's elements, middle element
 * arr2: second half 
 * 
 * E-------
 * [1, 5, 2, 4, 3];
 * 0   1  2  3  4
 * @midIdx =  5/ 2 = 2.5
 * @secondHalf = 5/2 = Math.ceil(2.5)
 * 
 * A----
 * get @midIdx = arr.length / 2
 * get arr1 = arr.slice(0, Math.cei(midIdx))
 * arr2 = arr.slice(Math.ceil(midIdx))
 * 
 */

halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
halvsies([5]);                // [[5], []]
halvsies([]);                 // [[], []]


function halvsies(arr) {
  let midIdx = Math.ceil(arr.length / 2);

  let firstHalf = arr.slice(0, midIdx);
  let secondHalf = arr.slice(midIdx);

  let returnArr = [firstHalf, secondHalf];

  console.log(returnArr);
  return returnArr;
}

