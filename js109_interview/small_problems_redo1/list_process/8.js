console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]

/**
 * iterate thru arr using forEach
 * for each subArr =>
 *  - start a loop from 1 to subArr[1]
 *  - append subArr[0] to returnArr
 */

function buyFruit(arr) {
  let returnArr = [];
  arr.forEach(fruitArr => {
    for (let count = 0; count < fruitArr[1]; count += 1) {
      returnArr.push(fruitArr[0]);
    }
  })
  
  return returnArr;
}