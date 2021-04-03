let arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];

let resultArr = arr.map(subArr => { 
  if (typeof subArr[0] === typeof 'a') { // is a letter
    return subArr.slice().sort();
  } else {
    return subArr.slice().sort((a,b) => a - b);
  }
});

console.log(arr);
console.log(resultArr);