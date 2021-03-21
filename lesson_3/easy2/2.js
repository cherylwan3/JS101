let numbers = [1, 2, 3, 4, 5];

// reverse
let numReverse = numbers.slice().reverse();
console.log(numReverse);

// sort 
let numSortReverse = [...numbers].sort((num1, num2) => num2 - num1);
console.log(numSortReverse); // [ 5, 4, 3, 2, 1 ]

//  Array.prototype.forEach() method
let numForEach = [];
numbers.forEach(num => numForEach.unshift(num));
console.log(numForEach);