/**
 * P----------------------
 * input: function (number)
 * output: number
 * rules:
 * - function takes a positive integer number
 * - returns next bigger number formed by same digits
 * - if no bigger number, return -1
 * D----------------------
 * - same digits, descending order => -1
 * - turn number into string, iterate over string of numbers
 * - 1432 => 2431 -> 2134
 * - 2341 => 2431 -> 2413  
 * - 513 => 531 
 * - 5130 => 5310 -> 5301 
 * A-----------------------------------------
 * - for the second code
 * - convert number to string, then array
 * - create a copy of array, turn each element into number -> @numArr
 *  - create a copy of the @numArr , sort the array in descending order,
 *    - compare the descending and original number
 *    -  if same, return -1
 * - initialize  @smallestRight @leftSwapIdx
 *  - iterate over array from numArr.length - 1 to index 0
 *    - if current element is greater than element at next index (index - 1),
 *      - assign @idx - 1 to @leftSwapIdx
 *      - assign @idx to @smallestRightIdx
 *  find smallest number to the right of numArr[idx - 1] that's greater:
*    - iterate through @idx from idx to numArr.length
*    - if number at current index > numArr[@leftswapIdx] AND < @smallestRight,
*        - reassign @smallestRightIdx to this current index
 *  - swap the elements in @numArr at @leftSwapIdx and @smallestRightIdx
 *  - get a copy of @numArr from @leftSwapIdx + 1 to end of array
 *    - sort the array in ascending order 
 *    - assign this array to @rightNumArr
 *  - get a copy of @numArr from index of 0 to @leftSwapIdx -> assign to @leftNumArr
 *  - then append @rightNumArr to @leftNumArr -> assign to @numArr
 *  - convert @numArr to a number, return this number
 * 
 *    
*/       
//ex
console.log(nextBiggerNum(9) === -1); //true
console.log(nextBiggerNum(12) === 21); //true
console.log(nextBiggerNum(513) === 531); //true
console.log(nextBiggerNum(2017) === 2071); //true
console.log(nextBiggerNum(111) === -1); //true
console.log(nextBiggerNum(531) === -1); //true
console.log(nextBiggerNum(123456789) === 123456798); //true

console.log(nextBiggerNum(1432) === 2134); //true

function toArray(num) {
  return String(num).split('').map(char => Number(char));
}

// compare to see both numbers have same digits
function compareDigits(num1, num2) {
  let numArr1 = toArray(num1).sort();
  let numArr2 = toArray(num2).sort();

  if (numArr1.length !== numArr2.length) return false;

  for (let idx = 0; idx < numArr1.length; idx += 1) {
    if (numArr1[idx] !== numArr2[idx]) return false;
  }

  return true;
}

function nextBiggerNum(num) {
  let biggest = Number(toArray(num).sort((a, b) => b - a).join(''));
  
  for (let nextNum = num + 1; nextNum <= biggest; nextNum += 1) {
    if (compareDigits(num, nextNum)) return nextNum;
  }

  return -1;
}


/* function nextBiggerNum(num) {
  let numArr = String(num).split('').map(char => Number(char));
  
  let descendNum = Number(descendingSort(numArr.slice()).join(''));
  if (descendNum === num) {
    return -1;
  }

  let leftSwapIdx, smallestRightIdx;

  for (let idx = numArr.length - 1; idx >= 0; idx -= 1) {
    if (numArr[idx] > numArr[idx - 1]) {
      leftSwapIdx = idx - 1;
      smallestRightIdx = idx;
      break;
    }
  }

  for (let idx = smallestRightIdx; idx < numArr.length; idx += 1) {
    if (numArr[idx] > numArr[leftSwapIdx] && numArr[idx] < numArr[smallestRightIdx]) {
      smallestRightIdx = idx;
    }
  }

  [numArr[leftSwapIdx], numArr[smallestRightIdx]] = [numArr[smallestRightIdx], numArr[leftSwapIdx]];
  
  let rightArr = ascendingSort(numArr.slice(leftSwapIdx + 1));
  numArr = numArr.slice(0, leftSwapIdx + 1).concat(rightArr);
  
  return Number(numArr.join(''));
}

function ascendingSort(array) {
  return array.sort((a, b) => a - b);
}

function descendingSort(array) {
  return array.sort((a, b) => b - a);
} 
*/