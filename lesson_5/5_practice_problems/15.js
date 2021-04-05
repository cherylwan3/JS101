let arr = [
  { a: [1, 2, 3] },
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];

let resultArr = arr.filter(obj => {
  let valueArr = Object.values(obj);
  
  return valueArr.every(subArr => {
    return subArr.every(num => num % 2 === 0); 
  });
});

console.log(resultArr);

// [ [ 2, 4, 6 ], [ 3, 6 ], [ 4 ] ] valueArr
// [ 2, 4, 6] subArr
