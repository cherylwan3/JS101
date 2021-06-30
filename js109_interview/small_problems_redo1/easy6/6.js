sequence(5);    // [1, 2, 3, 4, 5]
sequence(3);    // [1, 2, 3]
sequence(1);    // [1]

/**
 * let arr 
 * [...Array(5)]
 */

function sequence(num) {
  let result = [...Array(num)].map((_,idx) => idx + 1);
  console.log(result);
  return result;
}