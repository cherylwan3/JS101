let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

arr.sort((subArrA, subArrB) => {
  let oddSumA = subArrA.filter(num => num % 2 === 1)
                       .reduce((sum, num) => sum + num);
  let oddSumB = subArrB.filter(num => num % 2 === 1)
                       .reduce((sum, num) => sum + num);
  return oddSumA - oddSumB;
});

/* let subArr = [1, 8, 3];
let oddSubArr = subArr.filter(num => num % 2 === 1);
let oddSum = oddSubArr.reduce((totalNum, currentNum) => totalNum + currentNum); */

console.log(arr);