// { a: 1, b: 'two', sea: { c: 3 }, D: [ 'a', 'b', 'c' ] }

let arr = [['a', 1], ['b', 'two'], ['sea', {'c': 3}], ['D', ['a', 'b', 'c']]];

// solution 1
let resultObj = Object.fromEntries(arr));
console.log(resultObj);


// solution 2
let obj = {};
arr.forEach(subArr => {
  obj[subArr[0]] = subArr[1];
});

console.log(obj);