let arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];

let resultArr = arr.map(subArr => { 
  if (typeof subArr[0] === 'string') { // is a letter
    return subArr.slice().sort().reverse();
  } else {
    return subArr.slice().sort((a,b) => b - a);
  }
});

console.log(arr);
console.log(resultArr);