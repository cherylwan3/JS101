/**
 * P -----------------------------
 * input: oddities(arr) function
 * output: array with every other element
 * rules:
 * - elements in index 1, 3, 5, etc. of array
 * A --------------------------------
 - write a function named oddities with one argument called arr
 - create a new array called oddElements
 - get every other element and append it to oddElements
  - create a variable called index and set it to 0
  - while index < arr.length, add the element at current index to oddElements
  - increment index by 2 
- return oddElements
 */

function oddities(arr) {
  let oddElements = [];
  for (let index = 0; index < arr.length; index += 2) {
    oddElements.push(arr[index]);
  }
  return oddElements;
}

// examples
console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []


