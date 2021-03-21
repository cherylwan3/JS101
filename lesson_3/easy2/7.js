let flintstones = { 
  Fred: 0, 
  Wilma: 1, 
  Barney: 2, 
  Betty: 3, 
  Bambam: 4, 
  Pebbles: 5 
};
// [ 'Barney', 2 ]

console.log(Object.entries(flintstones).filter((propArr) => propArr[0] === 'Barney').shift());