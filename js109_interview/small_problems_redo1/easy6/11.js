let list = [1, 2, 3, 4];
let result = reverse(list);
console.log(result); // logs [4,3,2,1]
console.log(list === result); // logs true

let list1 = ["a", "b", "c", "d", "e"];
let result1 = reverse(list1);
console.log(result1); // logs  ["e", "d", "c", "b", "a"]
console.log(list1 === result1); // logs true

let list2 = ["abc"];
let result2 = reverse(list2);
console.log(result2); // logs  ["abc"]
console.log(list2 === result2); // logs true

let list3 = [];
let result3 = reverse(list3);
console.log(result3); // logs []
console.log(list3 === result3); // logs true

function reverse(arr) {
  let second = arr.length - 1;
  for (let first = 0; first < arr.length / 2 ; first += 1) {
    second = second - first;
    [arr[first], arr[second]] = [arr[second], arr[first]]
  }
  return arr;
}

// my own solution
function reverse(array) {
  let arrayLength = array.length;

  for (let idx = arrayLength - 1; idx >= 0; idx -= 1) {
    array[array.length] = array[idx];
  }
  
  array.splice(0, arrayLength); 
  return array; 
}


/**
 * E------
 * [1, 2, 3, 4];
 * 
 * A--------
 * iterate over array's index from @first < array's length / 2 
 * set @second  to array's length - 1 - @first
 * 
 *  set  to swap  to array[0]
 *  set array[0] to array[4]
 *  set array[4] to swap 
 * 
*/
