/**
 * func (count, startNum)
 * 
 * array's length = count
 * each element = muliple of starting num (add startNum)
 */

sequence(5, 1);          // [1, 2, 3, 4, 5]
sequence(4, -7);         // [-7, -14, -21, -28]
sequence(3, 0);          // [0, 0, 0]
sequence(0, 1000000);    // []

function sequence(count, startNum) {
  let array = [...Array(count)].map((_, idx) => startNum * (idx + 1))

  console.log(array);
  return array;
}


