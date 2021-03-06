function doubleNumbers(numbers) {
  let doubledNums = [];
  let counter = 0;

  while (counter < numbers.length) {
    let currentNum = numbers[counter];
    doubledNums.push(currentNum * 2);

    counter += 1;
  }

  return doubledNums;
}

function doubleNumbersMutated(numbers) {
  let counter = 0;

  while (counter < numbers.length) {
    let currentNum = numbers[counter];
    numbers[counter] = currentNum * 2;
    // shorter => numbers[counter] *= 2;

    counter += 1;
  }

  return numbers;
}


let myNumbers = [1, 4, 3, 7, 2, 6];

doubleNumbers(myNumbers); // => [2, 8, 6, 14, 4, 12]
console.log(myNumbers);                // => [1, 4, 3, 7, 2, 6]

doubleNumbersMutated(myNumbers);
console.log(myNumbers);  