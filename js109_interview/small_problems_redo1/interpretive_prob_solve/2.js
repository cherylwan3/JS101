/**
 * func (n) 
 * logs: n * n grid 
 * n: odd integer 
 * 
 * E---
 * diamond(9)
 * 1
 * 3
 * 5
 * 7
 * 9
 * 7
 * 5
 * 3
 * 1
 * D--------
 * arrStars = [1, 3, 5, 7, 9, 7, 5, 3, 1]
 * arrStars = []
 * 
 * A---
 * iterate from starNum of 1 to <= n, increment by 2
 *  append to arrStars the starNum
 *  get a reversed arrStars array from idx 0 to arrStars length - 1
 *    not including end index
 *   and append it to arrStars
 * 
 * iterate over arrStars
 * log (n - elem) number of spaces 
 *    + log each elem number of stars into the console
 *    + (n - elem) number of spaces 
*/

function diamond(n) {
  let arrStars = [];
  for (let starNum = 1; starNum <= n; starNum += 2) {
    arrStars.push(starNum);
  }
  let reverse = arrStars.slice(0, arrStars.length - 1).reverse();
  arrStars = arrStars.concat(reverse);

  arrStars.forEach(numStars => {
    let spaceNum = (n - numStars) / 2;
    let space = ' '.repeat(spaceNum);
    let stars = '*'.repeat(numStars);
    console.log(space + stars + space);
  });
}

diamond(1);

diamond(3);
// logs
/*  *
***
 * */
diamond(9);
// logs
/*     *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    * */