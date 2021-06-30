let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 20 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];

/**
 * use transactionsFor to get array of objects
 * declare a @sum
 * iterate over array
 *  => for each obj, 
 *    - if obj.movement === 'in', @sum += obj.quantity
 *    else, sum -= obj.quantity
 * if sum > 0, return true, else return false
*/
function transactionsFor(itemNum, transactionsList) {
  return transactionsList.filter(obj => obj.id === itemNum);
}

function isItemAvailable(itemNum, transactionsList) {
  let iterateArr = transactionsFor(itemNum, transactionsList);
  let sum = 0;
  iterateArr.forEach(obj => {
    obj.movement === 'in' ? sum += obj.quantity : sum -= obj.quantity;
  });

  console.log(sum > 0);
  return sum > 0;
}

isItemAvailable(101, transactions);     // false
isItemAvailable(103, transactions);     // false
isItemAvailable(105, transactions);     // true