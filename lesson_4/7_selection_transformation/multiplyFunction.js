function multiply (numArr, multiplier) {
  let doubledNums = [];
  let counter = 0;

  while (counter < numArr.length) {
    let currentNum = numArr[counter];
    doubledNums.push(currentNum * multiplier);

    counter += 1;
  }

  return doubledNums;
}



let myNumbers = [1, 4, 3, 7, 2, 6];

console.log(multiply(myNumbers, 3)); // => [3, 12, 9, 21, 6, 18]

console.log(myNumbers);  // => [1, 4, 3, 7, 2, 6]
