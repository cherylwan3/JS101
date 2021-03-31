function doubleOddIndices (numArray) {
  let doubledArr = [];

  for (let currentIndex = 0; currentIndex < numArray.length; currentIndex += 1) {
    let currentNum = numArray[currentIndex];
    
    if (currentIndex % 2 === 1) {
      currentNum *= 2;
      doubledArr.push(currentNum);
    } else {
      doubledArr.push(currentNum);
    }
  }
  
  return doubledArr;
}

let arr = [1, 2, 3, 4, 5];
console.log(doubleOddIndices(arr)); // expected output = [1, 4, 3, 8, 5];