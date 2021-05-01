/**
 * P----------------------------
 * input: array
 * output: number
 * rules:
 * - array: unordered array
 *    - has exactly one value occur twice
 * - function returns the duplicate value 
 * E-------------------------
 * D/A-----------------------
 * 1. create a function named @findDup with parameter @array
 * 2. create an empty array and set it to @searchArray
 * 4. create a variable named @duplicateValue
 * 3. start a loop that iterates over @array from @idx of '0' to @array.length
 *    - if @idx is equal to 0, add the element at @idx 0 to @searchArray
 *    - else if @searchArray includes element at current @idx 
 *        - set duplicateValue to current element
 *        - return duplicateValue
 *        - end the loop
 *    - else, add element at current @idx to @searchArray
*/

// my own longer way
/* function findDup1(array) {
  let searchArray = [];
  let duplicateValue;

  array.forEach((num, idx) => {
    if (idx === 0) {
      searchArray.push(num);
    } else if (searchArray.includes(num)) {
      duplicateValue = num;
    } else {
      searchArray.push(num)
    }
  })

  return duplicateValue;
} */

// shortest way
function findDup(array) {
  array.sort();
  return array.find((_, idx) => array[idx] === array[idx + 1]);
}

// ex
console.log(findDup([1, 5, 3, 1]));                                // 1
console.log(findDup([18,  9, 36, 96, 31, 19, 54, 75, 42, 15,
         38, 25, 97, 92, 46, 69, 91, 59, 53, 27,
         14, 61, 90, 81,  8, 63, 95, 99, 30, 65,
         78, 76, 48, 16, 93, 77, 52, 49, 37, 29,
         89, 10, 84,  1, 47, 68, 12, 33, 86, 60,
         41, 44, 83, 35, 94, 73, 98,  3, 64, 82,
         55, 79, 80, 21, 39, 72, 13, 50,  6, 70,
         85, 87, 51, 17, 66, 20, 28, 26,  2, 22,
         40, 23, 71, 62, 73, 32, 43, 24,  4, 56,
          7, 34, 57, 74, 45, 11, 88, 67,  5, 58]));    // 73