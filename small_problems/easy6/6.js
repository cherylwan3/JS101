/**
 * P-------------------------
 * in: num
 * out: array
 * - returns an array 
 * - containing all integers between 1 and the argument (inclusive), in ascending order.
 * - assume that the argument will always be a positive integer.
 * D/A------------------------
 */

function sequence1(limit) {
  let arr = [];

  for (let num = 1; num <= limit; num += 1) {
    arr.push(num);
  }
  
  console.log(arr);
  return arr;
}


// using map
let sequence = (num) => {
  let arr = [...Array(num)].map((_, idx) => idx + 1);
  
  console.log(arr);
  return arr
};
sequence(5);    // [1, 2, 3, 4, 5]
sequence(3);    // [1, 2, 3]
sequence(1);    // [1]