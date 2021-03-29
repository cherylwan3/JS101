let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};


// Let's look at an example with objects. In this example,
// we want to select the key-value pairs where the value is 'Fruit'.

function selectFruit(produceList) {
  let fruitPairsArr = Object.entries(produceList)
                            .filter(fruitPairs => fruitPairs[1] === 'Fruit'); 
  let fruitPairsObj = Object.fromEntries(fruitPairsArr);
  return fruitPairsObj;
}

selectFruit(produce); // => { apple: 'Fruit', pear: 'Fruit' }
console.log(selectFruit(produce));

// launch school answer
function selectFruit1(produceList) {
  let produceKeys = Object.keys(produceList);
  let selectedFruits = {};

  for (let counter = 0; counter < produceKeys.length; counter++) {
    let currentKey = produceKeys[counter];
    let currentValue = produceList[currentKey];

    if (currentValue === 'Fruit') {
      selectedFruits[currentKey] = currentValue;
    }
  }

  return selectedFruits;
}
console.log(selectFruit1(produce));
