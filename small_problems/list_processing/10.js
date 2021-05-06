/**
 * P---------------------
 * input: func(an inventory item and a list of transactions)
 * output: boolean
 * rules:
 * -returns true or false based on whether an inventory item is available.
 * - return true if sum of the quantity values of
 *   item's transactions is greater than zero.
 * - A movement value of 'out' will decrease the item's quantity.
 * D/A-------------------
 * - declare func
 * - set @transactionsList to the return value of calling transactionsFor()
 * - iterate over @transactionsList 
 *    - if obj.movement is 'out', then change obj.quantity to negative 
 *    - add obj.quantity to the total @sum
 * - if sum is > 0, return true
 *    - otherwise, return false
*/

// ex 
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

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(103, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true


function transactionsFor(itemNum, transactionsList) {
  return transactionsList.filter(obj => obj.id === itemNum);
}

function isItemAvailable(itemNum, transactionsList) {
  let totalSum = transactionsFor(itemNum, transactionsList)
                .reduce((sum, obj) => {
                  if (obj.movement === 'out') obj.quantity *= -1;
                  return sum + obj.quantity;
                }, 0);
  return totalSum > 0;
}
