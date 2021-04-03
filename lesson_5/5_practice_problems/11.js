let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

let newArr = arr.map(obj => {
  objArr = Object.entries(obj); // [ [ 'd', 4 ], [ 'e', 5 ], [ 'f', 6 ] ]
  objArr.forEach(elemArr => elemArr[1] += 1);
  return Object.fromEntries(objArr);
});




// for/in loop method 
/* let newArr = arr.map(obj => {
  let incrementedObj = {};

  for (let key in obj) {
    incrementedObj[key] = obj[key] + 1;  
  }

  return incrementedObj;
}); */

console.log(arr);
console.log(newArr);
