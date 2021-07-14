/* eslint-disable max-lines-per-function */
/**
 * func (switches)
 * return: array of lights that are on after count passes
 * D---------
 * true = light on
 * false = light off
 * arr [undefined, true, true, true, true ,true]
 * A------------
 * let arr = [undefined]
 * loop from idx1 to <= count
 *    let  arr[idx] = true;
 *                
 * loop  idx1 from 2 to <= count
 *    loop (idx2) from 1 to <=count 
 *    if (idx2 >= idx1) && (idx2 % idx1 === 0)
 *        arr[idx2] = !arr[idx2];
 
 * 
 * filter arr to get the elements that are true
 * map to return the index
 * 
 * D-------------
 * idx1 = 3 (multiple )
 * idx2 = 1, 2, 3, 4, 5
 * 
 * [1, 2O, 3O, 4, 5o,]
 * 
*/

function lightsOn(count) {
  let lightsArr = [undefined];
  for (let idx = 1; idx <= count; idx += 1) {
    lightsArr[idx] = true;
  }

  for (let idx1 = 2; idx1 <= count; idx1 += 1) {
    for (let idx2 = 1; idx2 <= count; idx2 += 1) {
      if ((idx2 >= idx1) && (idx2 % idx1 === 0)) {
        lightsArr[idx2] = !lightsArr[idx2];
      }
    }
  }

  lightsArr = lightsArr
    .map((elem, idx) => (elem === true ? idx : elem))
    .filter(elem => Number.isInteger(elem));

  console.log(lightsArr);
  return lightsArr;
}


lightsOn(5);        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

lightsOn(100);      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
