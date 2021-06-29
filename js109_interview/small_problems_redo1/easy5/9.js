/**
 * create obj 
 * iterate over array
 *  -  obj[arrayElem] = obj[arrayElem] || 0
 *  - obj[arrayElem] += 1
 * 
 * get entries of obj => [[elem, num],[elem, num]]
 * iterate over array
 *  - log `array[0] => array[1]`
 * 
*/

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences1(vehicles);

// console output -- your output sequence may be different
/** 
car => 4
truck => 3
SUV => 1
motorcycle => 2
*/

function countOccurrences(carArr) {
  let carObj = {};

  carArr.forEach(car => {
    carObj[car] = carObj[car] || 0;
    carObj[car] += 1;
  })

  Object.entries(carObj).forEach(arr => {
      console.log(`${arr[0]} => ${arr[1]}`);
  });

  return undefined;
}

// using for let in loop method
function countOccurrences1(carArr) {
  let carObj = {};

  carArr.forEach(car => {
    carObj[car] = carObj[car] || 0;
    carObj[car] += 1;
  })

  for (let car in carObj) {
    console.log(`${car} => ${carObj[car]}`);
  }

  return undefined;
}