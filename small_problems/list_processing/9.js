/**
 * P---------------------
 * input: func(inventory ID, list of transactions
 * - transactions -> 
 *  array of obj: of inventory item iD and transactions: movement, quantity
 * output: an array containing transactions for the specified inventory item.
 * 
 * D/A-------------------
 * - declare func
*/


//ex
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

transactionsFor(101, transactions);
// returns
// [ { id: 101, movement: "in",  quantity:  5 },
//   { id: 101, movement: "in",  quantity: 12 },
//   { id: 101, movement: "out", quantity: 18 }, ]

function transactionsFor(itemNum, transactionsList) {
  return transactionsList.filter(obj => obj.id === itemNum);
}