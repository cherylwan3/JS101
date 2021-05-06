/**
 * P---------------------
 * input: func(2D array)
 * output: 1D array
 * rules:
 * - Each element in the grocery list contains a fruit name 
 * - and a number that represents the desired quantity of that fruit. 
 * - The output array is such that each fruit name appears the number of times 
 *     equal to its desired quantity.
 * D/A-------------------
 * - declare func
 * - set @result to []
 * - set @fruitObj to  @array converted to an object
 * - iterate over @fruitObj
 *    - add to @result the current object property's key name (value # of times)
*/


function buyFruit(array) {
  let result = [];
  
  let fruitObj = Object.fromEntries(array);
  for (let fruit in fruitObj) {
    for (let num = 1; num <= fruitObj[fruit]; num += 1) {
      result.push(fruit);
    }
  }

  return result;
}

//ex 
buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]);
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]