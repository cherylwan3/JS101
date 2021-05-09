/**
 * P---------------------
 * input: func (array)
 * output: same array
 * rules:
 * - function that sorts an array using the bubble sort algorithm.
 * - sorts in place
 * - array has at least 2 elements
 * - bubble sort: 
 * We can stop iterating the first time we make a pass through the array 
 *  without making any swaps because this means that the entire array is sorted.
 * D------------------
 * - array
 * A-----------------
 * - func (array)
 * REPEAT
 * - declare @swapped and set it to @false
 * - start loop: iterate from @idx to Upto @array.length 
 *    - IF array[idx] > array[idx + 1],
 *        - /then swap them & remember something changed/
 *        - swap(A[idx], A[idx + 1])
 *        - set @swapped to true
 *     - end IF
 *  - end loop
 * - UNTIL not swapped
 * - return array
*/

function bubbleSort(arr) {
  while (true) {
    let swapped = false;
    for (let idx = 0; idx < arr.length; idx += 1) {
      if (arr[idx] > arr[idx + 1]) {
        [arr[idx], arr[idx + 1]] = [arr[idx + 1], arr[idx]];
        swapped = true;
      }
    }
    if (!swapped) break;
  }

  return arr;
}

// E: test cases
let array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

let array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]